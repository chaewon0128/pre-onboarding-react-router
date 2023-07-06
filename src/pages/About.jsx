import useRouter from "../hook/useRouter";

export default function About() {
    const { push  } = useRouter();
    
    const onMoveMain = () => {
        push("/")
    }
    return (
        <div>
            <h1>About</h1>
            <button onClick={onMoveMain}>go Main</button>
        </div>
    );
}

