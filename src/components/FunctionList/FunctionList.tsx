type propsFunctions = {
  functions: (string | boolean)[];
};

export default function FunctionList({ functions }: propsFunctions) {
  return (
    <div>
      {functions.map((i) => {
        return (
          <p>
            {i}
          </p>
        );
      })}
    </div>
  );
}
