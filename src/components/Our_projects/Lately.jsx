import { getMediaById, getPortfolioPosts } from "../../lib/BackendContents";
import ProjectsList from "../Our_projects/ProjectsList";

const Lately = async ({ sectionId, portfolioCategoryId }) => {
  const posts = await getPortfolioPosts(portfolioCategoryId);

  const medias = {};
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    if (post.featured_media) {
      medias[post.featured_media] = await getMediaById(post.featured_media);
    }
  }

  if (posts.length === 0) {
    return;
  }

  return (
    <section
      id={sectionId}
      className="relative h-screen w-full overflow-hidden z-30"
    >
      {/* Ripped paper effect at the top of this section */}
      {/* <div className="absolute z-99999 w-full top-[-1px] left-0 right-0 pointer-events-none overflow-hidden">
        <img
          src="/images/objects/torn-papers/torn-paper-6.svg"
          alt="Torn sheet"
          className="w-full"
        />
      </div> */}
      
      <img
        src="/images/bg-screen6-9-3.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <h2 className="relative z-1 heading-secondary heading-secondary--white text-center mt-[7.3rem]">
        LATELY AT{" "}
        <span className="heading-secondary--rose relative inline-block">
          BOXCOM
          <img
            src="/images/Design-line2.gif"
            className="absolute top-[5%] left-[49%] -translate-x-1/2 max-w-[200px] -mt-20 block -z-10"
          />
        </span>
      </h2>

      <div>
        <ProjectsList projects={posts} medias={medias} />
      </div>
    </section>
  );
};

export default Lately;
