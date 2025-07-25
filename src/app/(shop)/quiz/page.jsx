'use client'
import { IoMdAdd } from "react-icons/io";
import { FaCheckCircle, FaChevronRight, FaRegCircle } from "react-icons/fa";
import { Avatar, Button, List, ListItemButton, ListItemText } from "@mui/material";


import { useEffect, useState } from "react";
import { createQuestion, createQuiz } from "@/actions/post";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { deepPurple } from "@mui/material/colors";
import { getQuiz } from "@/actions/get";
import { IoArrowBack, IoClose } from "react-icons/io5";
import { globalLoader } from "@/lib/slices";

export default function Quiz() {

     const user = useSelector(state => state.user);
     const [quiz, setQuiz] = useState({ heading: '', description: '' });
    //  const [question, setQuestion] = useState({ title: '', answer: '', explain: '' });
    //  const [options, setOptions] = useState({});
    //  let optionsList = Object.values(options);
    const dispatch = useDispatch();

     const [quizList, setQuizList] = useState([]);
     const [addForm, setAddForm] = useState(false);

     useEffect(() => {
        const getInitQuiz = async () => {
            if (!user.id) return;
            dispatch(globalLoader(true));
            const res = await getQuiz({ userId: user.id });
            dispatch(globalLoader(false));
            console.log(res);
            if (res.status === 200) {
                setQuizList(res.data);
            }
        }
        getInitQuiz();
     }, [user.id])
 
     const quizSubmit = async (e) => {
        e.preventDefault();
        console.log(quiz);

        if (!user.id) return alert('Invalid User, please login again.');
        dispatch(globalLoader(true));
        const res = await createQuiz({ ...quiz, author: user.id });    
        dispatch(globalLoader(false));
        console.log(res)
        if (res.status === 200) {
            setQuizList(pre => [...pre, res.data]);
            setAddForm(false);
            setQuiz({ heading: '', description: '' })
        }
    }

    //  const handleQuestion = (e) => {
    //     let { name, value } = e.target;
    //     setQuestion(pre => ({...pre, [name]: value}))
    //  }

 
    //  const questionSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log(question);
    //     console.log(options);
    //     if (!question.answer) return alert('Please Select the correct option as answer to your question.');
    //     let blankAnswers = optionsList.filter(i => i.content === '');
    //     if (blankAnswers.length) return alert('Options cannot be blank, please remove blank options.');
    //     const res = await createQuestion({ ...question, options: options });    
    //     console.log(res)
    //     if (res.status === 200) {
            
    //     }
    //  }
     
    //  const handleOptions = (e) => {
    //      let { name, value } = e.target;
    //      setOptions(pre => ({ ...pre, [name]: { key: name, content: value }}));
    //  }
 
    //  const deleteOption = (i) => {
    //     setOptions(pre => {
    //         delete pre[i.key]
    //         return { ...pre };
    //     })
    //  }

    return (
        <main className='quiz-home'>
            {/* <div className="absolute inset-0 z-0" style={{overflowX: 'clip'}}>
                <div className="background-gradient">
                    <div className="background-gradient-pattern"></div>
                </div>
            </div> */}
            <div className="container mx-auto">
                <div className="p-6">
                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-4">Your Subjects</h2>
                    <div className="mt-6">
                        <div >
                            <ul className="mb-4">
                                {quizList.map(i => (
                                    <li className="mb-4" key={i.id}>
                                        <Link prefetch={false} href={`/quiz/${i.id}?subject=${i.heading}`}>
                                            <ListItemButton className="gap-4 bg-slate-100 shadow-sm shadow-purple-400 rounded-lg p-4 hover:bg-purple-100">
                                                <Avatar className="uppercase" sx={{ bgcolor: deepPurple[500] }}>{(i.heading).substr(0, 2)}</Avatar>
                                                <div>
                                                    <h4 className="text-md font-semibold">{i.heading}</h4>
                                                    <p className="text-gray-500 mt-1">{i.description}</p>
                                                </div>
                                                <FaChevronRight className="ml-auto text-2xl text-slate-500" />
                                            </ListItemButton>
                                        </Link>
                                    </li>
                                ))}
                            
                            </ul>
                        </div>
                        {addForm || <div onClick={() => setAddForm(true)} className="h-[3.7rem] cursor-pointer border border-dashed border-blue-500 bg-gray-50 rounded-lg flex gap-3 justify-center items-center text-center">
                            <IoMdAdd className="text-[1.6rem] text-pink-600" />
                            <p className="font-medium text-blue-500 text-[1.15rem]">ADD NEW SUBJECT</p>
                        </div>}
                    </div>
                </div>
                {addForm &&                 
                    <div className="p-6">
                        <h2 className="text-xl font-semibold border-b border-gray-300 pb-4 flex items-center">Create a Subject <IoClose className='ml-auto text-[1.7rem] text-rose-700' onClick={() => setAddForm(false)} /></h2>
                        <form className="mt-6">
                            <div className="flex gap-4 mb-5">
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Subject Name</label>
                                    <input required name='heading' value={quiz.heading} onChange={(e) => setQuiz(pre => ({...pre, heading: e.target.value}))} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                            </div>
                            {/* <div className="flex gap-4 mb-5">
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Subject Description</label>
                                    <textarea required name='description' value={quiz.description} onChange={(e) => setQuiz(pre => ({...pre, description: e.target.value}))} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" placeholder="Desctription of the Quiz (optional)" ></textarea>
                                </div>
                            </div> */}
                            {/* <div className="flex gap-4 mb-5">
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Author / Creator <span className="text-red-500">*</span></label>
                                    <input name='email' readOnly value={user.name} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                            </div> */}
                            <Button onClick={quizSubmit} className="bg-pink-600 text-white rounded-lg py-3 px-8 hover:bg-pink-500 font-bold block ml-auto">Create Subject</Button>
                        </form>
                    </div> 
                }


                {/* <div className="p-6">
                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-4">Add Quiz Question</h2>
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
                        <Button onClick={questionSubmit} className="bg-pink-600 text-white rounded-lg py-3 px-8 hover:bg-pink-500 font-bold block ml-auto">ADD QUESTION</Button>
                    </div>
                </div> */}
            </div>
        </main>
    )   
}