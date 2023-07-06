import useRouter from "../hook/useRouter";

export default function Root() {
    const { push  } = useRouter();

  const onMoveAbout = () => {
    push("/about")
  }
        return (
        <div>
            <h1>Root</h1>
            <button onClick={onMoveAbout}>about</button>
        </div>
    );
}

