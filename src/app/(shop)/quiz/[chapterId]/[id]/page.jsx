'use client'
import { IoMdAdd } from "react-icons/io";
import { FaCheckCircle, FaRegCircle, FaChevronRight, FaRegEdit, FaEdit } from "react-icons/fa";
import { Avatar, Button, ListItemButton } from "@mui/material";


import { useEffect, useState } from "react";
import { createQuestion } from "@/actions/post";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "@/actions/get";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";


import { deepPurple } from "@mui/material/colors";
import { IoArrowBack } from "react-icons/io5";
import { globalLoader } from "@/lib/slices";
import { MdRefresh } from "react-icons/md";
import { Chart } from "react-google-charts";

const initOptionFields = {                
    "1": { "key": 1, "content": "" },
    "2": { "key": 2, "content": "" },
    "3": { "key": 3, "content": "" },
    "4": { "key": 4, "content": "" }
}
const initQuestion = { title: '', answer: '', explain: '' };

export default function Quiz() {

    const user = useSelector(state => state.user);
    const [question, setQuestion] = useState(initQuestion);
    const [options, setOptions] = useState(initOptionFields);       // Just replace initOptionFields with blank object {} to enable manual "Add Option" button.
    let optionsList = Object.values(options);                   
    const dispatch = useDispatch();

    const searchParams = useSearchParams();
    const chapter = searchParams.get('chapter');

    const [questionList, setQuestionList] = useState([]);
    const [tab, setTab] = useState('HOME');
    const router = useRouter()
    const params = useParams();
    console.log(questionList);
    const quizId = params.id;

    useEffect(() => {
        const getInitQuestions = async () => {
            if (!quizId) return;
            dispatch(globalLoader(true));
            const res = await getQuestions({ quizId: quizId });
            dispatch(globalLoader(false));
            if (res.status === 200) {
                setQuestionList(res.data);
            } else {
                // alert('No Questions found.');
            }
        }
        getInitQuestions();
    }, [quizId])

    // useEffect(() => {
    //     const getInitQuiz = async () => {
    //         if (!user.id) return;
    //         const res = await getQuiz({ userId: user.id });
    //         console.log(res);
    //         if (res.status === 200) {
    //             setQuizList(res.data);
    //         }
    //     }
    //     getInitQuiz();
    // }, [user.id])

    const handleQuestion = (e) => {
        let { name, value } = e.target;
        setQuestion(pre => ({...pre, [name]: value}))
    }

    const questionSubmit = async (saveNew) => {
        // e.preventDefault();
        if (!question.answer) return alert('Please Select the correct option as answer to your question.');
        let blankAnswers = optionsList.filter(i => i.content === '');
        if (blankAnswers.length) return alert('Options cannot be blank, please remove blank options.');
        dispatch(globalLoader(true));
        const res = await createQuestion({ ...question, options: optionsList, chapterId: quizId });    
        dispatch(globalLoader(false));
        console.log(res)
        if (res.status === 200) {
            if (question.id) {
                setQuestionList(pre => {
                    let target = pre.findIndex(i => i.id === question.id);
                    if (target === undefined) {
                        alert('An Error Occured !');
                        return pre;
                    }
                    pre[target] = res.data
                    return pre;                   
                })
            } else {
                setQuestionList(pre => ([...pre, res.data]))
            }
            resetForm();
            if (saveNew === 'saveNew') return;
            setTab('view-list');
        }
    }

    const resetForm = () => {
        setOptions(initOptionFields);
        setQuestion(initQuestion);
    }
    
    const handleOptions = (e) => {
        let { name, value } = e.target;
        setOptions(pre => ({ ...pre, [name]: { key: name, content: value }}));
    }

    const deleteOption = (i) => {
        setOptions(pre => {
            delete pre[i.key]
            return { ...pre };
        })
    }

    const handleEdit = (i) => {
        setQuestion({ id: i.id, title: i.title, answer: i.answer, explain: i.explain })
        let opt = toObject(i.options);
        setOptions(opt);
        setTab('form')
    }
    
    function toObject(arr) {
        var rv = {};
        for (var i = 0; i < arr.length; ++i)
            rv[arr[i].key] = arr[i];
        return rv;
    }

    const actions = [
        { 
            title: 'Start Quiz', 
            description: 'Start taking this quiz', 
            link: '#',
            onClick: () => {
                if (!qeustions.length) return alert('Your Dont have any qeustions in this quiz. Please add some qeustions to start.')
                setTab('start-quiz');
            } 
        },
        { 
            title: 'View Questions', 
            description: 'View questions included in this quiz', 
            link: '#',
            onClick: () => {
                setTab('view-list');
            } 
        },
        // { 
        //     title: 'Delete Quiz', 
        //     description: 'Delete this quiz', 
        //     link: '',
        //     onClick: () => {
        //         alert('Delete kuiz');
        //     }  
        // },
    ]

    const [qeustions, setQuestions] = useState([]);

    useEffect(() => {
        const insertAnsField = questionList.map(i => ({...i, chosenAns: ''}));
        setQuestions([...insertAnsField]);
    }, [questionList])

    const [active, setActive] = useState(0);
    const activeQuestion = qeustions[active];

    const next = () => {
        if (active === qeustions.length - 1) return;
        setActive(active + 1);
    }

    const prev = () => {
        if (active === 0) return;
        setActive(active - 1);
    }

    const handleUserAnswer = (i, n) => {
        setQuestions(pre => {
            let arr = [...pre];
            arr[n] = { ...activeQuestion, correct: i.key === activeQuestion.answer, chosenAns: i.key }
            return arr;
        });
    }

    const reset = (i) => {
        const insertAnsField = questionList.map(i => ({...i, chosenAns: ''}));
        setQuestions([...insertAnsField]);
        setActive(0);
    }

    const correct = qeustions.filter(i => i.correct);
    const inCorrect = qeustions.filter(i => !i.correct);

    console.log(correct);
    console.log(inCorrect);

    const data = [
        ["Correct", "Incorrect"],
        ["Correct", correct.length],
        ["Incorrect", inCorrect.length],
    ];
        
    const options3 = {
        title: "Your Quiz Results",
        pieHole: 0.4,
        is3D: false,

        legend: {
            position: "bottom",
            alignment: "center",
            textStyle: {
              color: "#233238",
              fontSize: 14,
            },
        }
    };


    return (
        <main className='quiz-home'>
            <div className="container mx-auto">
                <div className="tabContent">
                    <div className={`tab-item ${tab === 'HOME' ? 'block' : 'hidden'} `}>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold border-b border-gray-300 pb-4 flex items-center">{chapter} <IoArrowBack className='ml-auto text-[1.7rem] text-purple-700' onClick={() => router.back()} /></h2>
                            <div className="mt-6">
                                <div >
                                    <ul className="mb-4">
                                        {actions.map(i => (
                                            <li className="mb-4" key={i.name}>
                                                <Link prefetch={false} href={`#`} onClick={i.onClick}>
                                                    <ListItemButton className="gap-4 bg-slate-100 shadow-sm shadow-purple-400 rounded-lg p-4 hover:bg-purple-100">
                                                        <Avatar className="uppercase" sx={{ bgcolor: deepPurple[500] }}>{(i.title)?.substr(0, 2)}</Avatar>
                                                        <div>
                                                            <h4 className="text-md font-semibold">{i.title}</h4>
                                                            <p className="text-gray-500 mt-1">{i.description}</p>
                                                        </div>
                                                        <FaChevronRight className="ml-auto text-2xl text-slate-500" />
                                                    </ListItemButton>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-item ${tab === 'form' ? 'block' : 'hidden'} `}>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold border-b border-gray-300 pb-4 flex items-center">Add Question <IoArrowBack className='ml-auto text-[1.7rem] text-purple-700' onClick={() => {setTab('view-list');resetForm();}} /></h2>
                            <div className="mt-6">
                                <div className="flex gap-4 mb-5">
                                    <div className="flex-1">
                                        <label className="text-black text-[0.9rem] mb-2 block"> Write Your Question <span className="text-red-500">*</span></label>
                                        <textarea name='title' value={question.title} onChange={handleQuestion} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" placeholder="Write Your Question"></textarea>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 mb-5">
                                    {optionsList.map(i => {
                                        return (
                                            <div className="flex-1 relative" key={i.key}>
                                                <div className="flex gap-2 absolute top-1/2 right-4 -translate-y-1/2 text-2xl">
                                                    {i.key === question.answer ? 
                                                        <FaCheckCircle className="text-green-600" onClick={() => setQuestion(pre => ({...pre, answer: '' }))} /> : 
                                                        <FaRegCircle className="text-blue-600" onClick={() => setQuestion(pre => ({...pre, answer: i.key }))} />
                                                    }                                                                                                                     
                                                    <FaRegCircleXmark className="text-pink-600" onClick={() => deleteOption(i)}/>
                                                </div>
                                                <input name={i.key} value={options[i.key]?.content} onChange={handleOptions} className="px-5 py-4 bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" placeholder={`Option ${i.key}`} />
                                            </div>
                                        )
                                    })}
                                    {optionsList.length <= 3 && <div onClick={() => setOptions(pre => ({...pre, [optionsList.length+1]: { key: optionsList.length+1, content: '' }}))} className="h-[3.7rem] cursor-pointer border border-dashed border-blue-500 bg-gray-50 rounded-lg flex gap-3 justify-center items-center text-center">
                                        <IoMdAdd className="text-[1.6rem] text-pink-600" />
                                        <p className="font-medium text-blue-500 text-[1.15rem]">ADD OPTION</p>
                                    </div>}
                                    <div className="flex-1">
                                        <label className="text-black text-[0.9rem] mb-2 block"> Explain The Answer <span className="text-red-500">*</span></label>
                                        <textarea name='explain' value={question.explain} onChange={handleQuestion} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" placeholder="Explain The Answer (optional)" ></textarea>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-3">
                                    <Button onClick={() => questionSubmit('saveNew')} className={`bg-blue-600 text-white rounded-lg px-4 py-3 hover:bg-indigo-500 text-lg shadow-sm shadow-purple-400`}>Save & Add New</Button>
                                    <Button onClick={questionSubmit} className="bg-pink-600 text-white rounded-lg px-4 py-3 hover:bg-pink-500 text-lg shadow-sm shadow-purple-400">ADD QUESTION</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-item ${tab === 'view-list' ? 'block' : 'hidden'} `}>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold border-b border-gray-300 pb-4 flex items-center">Questions List <IoArrowBack className='ml-auto text-[1.7rem] text-purple-700' onClick={() => setTab('HOME')} /></h2>
                            <div className="mt-6">
                                <div >
                                    <ul className="mb-4">
                                        {questionList.map(i => (
                                            <li className="mb-4" key={i.id}>
                                                <Link prefetch={false} href={`#`}>
                                                    <ListItemButton className="gap-4 bg-slate-100 shadow-sm shadow-purple-400 rounded-lg p-4 hover:bg-purple-100">
                                                        <Avatar className="uppercase" sx={{ bgcolor: deepPurple[500] }}>{(i.heading)?.substr(0, 2)}</Avatar>
                                                        <div className="text-nowrap overflow-hidden">
                                                            <h4 className="text-md font-semibold">{i.title}</h4>
                                                            <p className="text-gray-500 mt-1 overflow-hidden overflow-ellipsis">{i.explain}</p>
                                                        </div>
                                                        <div className="ml-auto">
                                                            {/* <FaChevronRight className="ml-auto text-2xl text-slate-500" /> */}
                                                            <FaRegEdit onClick={() => handleEdit(i)} className="ml-auto text-2xl text-pink-600" />
                                                        </div>
                                                    </ListItemButton>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div onClick={() => setTab('form')} className="h-[3.7rem] cursor-pointer border border-dashed border-blue-500 bg-gray-50 rounded-lg flex gap-3 justify-center items-center text-center">
                                    <IoMdAdd className="text-[1.6rem] text-pink-600" />
                                    <p className="font-medium text-blue-500 text-[1.15rem]">ADD NEW QUESTION</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-item ${tab === 'start-quiz' ? 'block' : 'hidden'} `}>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold border-b border-gray-300 pb-4 flex items-center gap-3">
                                Answer the Questions 
                                <MdRefresh className='ml-auto text-[1.7rem] text-purple-700' onClick={reset} />
                                <IoArrowBack className='text-[1.7rem] text-purple-700' onClick={() => {setTab('HOME'); setActive(0);}} />
                            </h2>
                            <div className="mt-6">
                                <div className="flex gap-4 mb-5">
                                    <div className="flex-1">
                                        <label className="text-black text-[0.9rem] mb-2 block"> Question {active+1} out of {qeustions.length} <span className="text-red-500">*</span></label>
                                        <textarea name='title' value={activeQuestion?.title} readOnly className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" placeholder="Write Your Question"></textarea>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 mb-5">
                                    {activeQuestion?.options?.map(i => {
                                        return (
                                            <div className="flex-1 relative" key={i.key}>
                                                <div className="flex gap-2 absolute top-1/2 right-4 -translate-y-1/2 text-2xl pointer-events-none bg-white rounded-full">
                                                {
                                                    activeQuestion?.chosenAns ? 
                                                    i.key === activeQuestion.answer ? <FaCheckCircle className="text-green-600" /> : <FaRegCircleXmark className="text-pink-600" />
                                                    :                                                                                                                    
                                                    <FaRegCircle className="text-blue-600" />
                                                }
                                                </div>
                                                <input name={i.key} onClick={() => handleUserAnswer(i, active)} readOnly value={i?.content} onChange={handleOptions} className="px-5 py-4 bg-slate-100 w-full rounded-md outline-none text-[1rem] cursor-pointer" type="text" placeholder={`Option ${i.key}`} />
                                            </div>
                                        )
                                    })}
                                    {activeQuestion?.chosenAns && <div className="flex-1">
                                        <label className="text-black text-[0.9rem] mb-2 block"> Answer Explanation <span className="text-red-500">*</span></label>
                                        <textarea name='explain' value={activeQuestion?.explain} readOnly className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" ></textarea>
                                    </div>}
                                </div>
                                <div className="flex flex-wrap gap-4 text-nowrap mt-[5.4rem]">
                                    <Button onClick={prev} className={`${active === 0 && 'opacity-50'} bg-blue-600 min-w-fit text-white rounded-lg px-4 py-3 hover:bg-indigo-500 flex-1 text-lg shadow-sm shadow-purple-400`} type="submit">PREVIOUS</Button>
                                    {(active === qeustions.length - 1) ? 
                                        <Button onClick={() => setTab('results')} className="bg-gray-300 min-w-fit text-gray-600 rounded-lg px-4 py-3 hover:bg-indigo-200 flex-1 text-lg shadow-sm shadow-purple-400">RESULTS</Button> :
                                        <Button onClick={next} className={` bg-pink-600 min-w-fit text-white rounded-lg px-4 py-3 hover:bg-indigo-500 flex-1 text-lg shadow-sm shadow-purple-400`}>NEXT</Button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-item ${tab === 'results' ? 'block' : 'hidden'} `}>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold border-b border-gray-300 pb-4 flex items-center">View Results <IoArrowBack className='ml-auto text-[1.7rem] text-purple-700' onClick={() => {setTab('HOME'); reset()}} /></h2>
                            <div className="mt-6">
                                <div>
                                    {tab === 'results' && <Chart
                                        chartType="PieChart"
                                        width="100%"
                                        height="400px"
                                        data={data}
                                        options={options3}
                                    />}
                                </div>
                                <div>
                                <h2 className="my-4 text-xl font-semibold border-b border-gray-300 pb-4 flex items-center">Questions List</h2>
                                    <ul className="mb-4">
                                        {qeustions.map(i => (
                                            <li className="mb-4" key={i.id}>
                                                <div>
                                                    <ListItemButton className="gap-4 bg-slate-100 shadow-sm shadow-purple-400 rounded-lg p-4 hover:bg-purple-100">
                                                        <Avatar className="uppercase" sx={{ bgcolor: deepPurple[500] }}>{(i.heading)?.substr(0, 2)}</Avatar>
                                                        <div className="text-nowrap overflow-hidden flex-1">
                                                            <h4 className="text-md font-semibold">{i.title}</h4>
                                                            <p className="text-gray-500 mt-1 overflow-hidden overflow-ellipsis">{i.explain}</p>
                                                        </div>
                                                        <div className="flex gap-3">
                                                            {i.correct ? <FaCheckCircle className="ml-auto text-2xl text-green-600" /> : <FaRegCircleXmark className="ml-auto text-2xl text-pink-600" />}
                                                            {/* <FaChevronRight className="ml-auto text-2xl text-slate-500" /> */}
                                                        </div>
                                                    </ListItemButton>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="absolute inset-0 z-0" style={{overflowX: 'clip'}}>
                <div className="background-gradient">
                    <div className="background-gradient-pattern"></div>
                </div>
            </div> */}
        </main>
    )   
}