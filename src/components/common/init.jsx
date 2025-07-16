
import { blur } from "@/constants";
import { AutoLogin } from "../utils";

const Init = () => {
    return (
        <>                                    {/* ⭐⭐⭐ Never && in here causing too many multiple image network request.  */}
            <style>{blur ? `                    
                body {
                opacity: 0.1;
                }
                .main-logo {
                opacity: 0;
                }
            `: ''}</style>
            <AutoLogin />
        </>
    )
}

export default Init;