import * as React from "react";

function Meeting() {
  return (
    <div className="flex flex-col pb-7 bg-white h-[100vh]">
      <div className="flex gap-5 justify-between px-5 py-2.5 w-full text-2xl text-black bg-orange-100 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="src\assets\Images\Artificial.png"
          className="shrink-0 max-w-full aspect-square w-[5vw] rounded-md"
        />
        <div className="flex gap-5 my-auto max-md:flex-wrap max-md:max-w-full">
          <div className="grow justify-center px-9 py-4 rounded-xl bg-stone-300 w-fit max-md:px-5">
            Download report
          </div>
          <div className="justify-center px-9 py-4 whitespace-nowrap rounded-xl bg-stone-300 max-md:px-5">
            Leave
          </div>
        </div>
      </div>
      <div className="self-center mt-11 w-full max-w-[1341px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col rounded-md w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="src\assets\Images\pexels-rdne-5922550.jpg"
              className="w-full h-[80vh] object-cover rounded-3xl max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="src\assets\Images\pexels-emmy-e-1252107-2381069.jpg"
                className="self-center max-w-full rounded-3xl w-[20vw]"
              />
              <div className="flex gap-5 justify-between px-4 pt-6 pb-1 mt-10 rounded-xl h-96 bg-stone-300 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col text-3xl text-black">
                  <div className="text-4xl">Chat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default Meeting;