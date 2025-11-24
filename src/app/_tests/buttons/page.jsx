import Button2 from "../../../components/Buttons/Button2";

const PageTestButtons = () => {
  const variants = ["outline", "ghost", "filled"];
  const ends = [undefined, "emoji", "arrow"];
  const sizes = ["md", "lg", "xl", "2xl"];

  return (
    <div className="pt-[100px] w-full md:max-w-[1280px] mx-auto">
      <div className="text-5xl font-bold mb-8">Test buttons</div>

      <div className="flex justify-between">
        <div className="bg-black mb-5 p-3 space-y-3">
          {variants.map((variant, i) => {
            return ends.map((end, j) => {
              return sizes.map((size, k) => {
                return (
                  <div key={`${i}_${j}_${k}`}>
                    <div className="mb-2">
                      variant="{variant}" / end="{end}" / size="{size}" :
                    </div>
                    <Button2 variant={variant} end={end} size={size}>
                      Let's talk
                    </Button2>
                  </div>
                );
              });
            });
          })}
        </div>

        <div className="bg-white mb-5 p-3 space-y-3 text-black">
          {variants.map((variant, i) => {
            return ends.map((end, j) => {
              return sizes.map((size, k) => {
                return (
                  <div key={`${i}_${j}_${k}`}>
                    <div className="mb-2">
                      variant="{variant}" / end="{end}" / size="{size}" :
                    </div>
                    <Button2
                      variant={variant}
                      end={end}
                      size={size}
                      dark={false}
                    >
                      Let's talk
                    </Button2>
                  </div>
                );
              });
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default PageTestButtons;
