import styles from "./VisionaryClients.module.scss";
import ScrollButton from "../../ScrollButton/ScrollButton";
import Zigzag from "./Zigzag/Zigzag";

function fillArray(arr, size) {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(arr[i % arr.length]);
  }
  return result;
}

const VisionaryClients = ({ data }) => {
  const clients = Object.entries(data)
    .filter(([key, value]) => {
      return /^client_\d/.test(key) && !!value.img;
    })
    .map(([key, value]) => value);

  const pageClients = fillArray(clients, 25);

  return (
    <div
      id="page01_screen07"
      className="w-full md:!h-screen bg-black h-auto min-h-screen relative overflow-hidden z-30 "
    >
      {/* <div className="w-full h-full absolute top-0 left-0 z-0">
        <img
          src="/images/homepage/books-sky.jpg"
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full">
        <div>
          <h2 className="heading-primary h-[20vh] heading-primary--stroke text-center mb-5 mt-20 border">
            {data.title}
          </h2>
          <Zigzag />
        </div>
        <div className="w-full h-[80vh] flex flex-wrap justify-center items-center gap-4 p-4 md:[&>img]:w-[10%] [&>img]:w-[20%] object-contain ">
          {pageClients.map((client, i) => {
            return <img key={i} src={client.img} alt={client.alt} />;
          })}

          <div className="hidden md:block">
            <ScrollButton
              delay={0}
              containerStyles={styles.scrollButtonContainer}
              to="page01_screen08"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VisionaryClients;
