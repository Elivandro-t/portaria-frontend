import Template from "./confirmCss";

type Props = {
  titulo: string;
  status: "LOADING" | "SUCCESS";
};

export const Confirm = ({ status, titulo }: Props) => {
  return (
    <div>
      {status === "LOADING" && (
        <Template.loadingBar />
      )}

      {status === "SUCCESS" && (
        <Template.container>
          ✅ {titulo}
        </Template.container>
      )}
    </div>
  );
};
