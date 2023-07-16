import Button from "~/components/button/index.jsx";

export default function Auth() {
  return (
    <div>
      <Button onClick={() => console.log("test")} type={"button"}>
        Giris Yap
      </Button>
    </div>
  );
}
