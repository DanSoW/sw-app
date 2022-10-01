import { FC, useState } from "react";
import ErrorMessage from "@components/ErrorMessage";

const WithErrorApi = (View: FC<any>) => {
  const FunctionalOrderComponent: FC<any> = (props: any) => {
    const [errorApi, setErrorApi] = useState<boolean>(false);

    return (
      <>
        {errorApi ? (
          <ErrorMessage />
        ) : (
          <>
            <View setErrorApi={setErrorApi} {...props} />
          </>
        )}
      </>
    );
  };

  return FunctionalOrderComponent;
};

export default WithErrorApi;
