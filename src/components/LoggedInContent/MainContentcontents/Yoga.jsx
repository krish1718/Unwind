import React from "react";
import YogaCards from "./YogaCards";

const Yoga = () => {
  const name = [
    "Sukhasana: Easy Pose",
    "Balasana: Child’s Pose",
    "Adho Mukha Svanasana",
    "Salamba Sarvangasana",
    "Savasana: Corpse Pose",
  ];
  const link = [
    "https://www.youtube.com/embed/BEYW5hPoKOo",
    "https://www.youtube.com/embed/2MJGg-dUKh0?start=7",
    "https://www.youtube.com/embed/6Ep5VzGqDRU?start=6",
    "https://www.youtube.com/embed/UjHTOW9x3WM?start=6",
    "https://www.youtube.com/embed/1VYlOKUdylM?start=6",
  ];
  const details = [
    "It's the traditional meditative position of sitting on the floor with crossed legs and an upright spine. Easy position is a strong tool for recovering the strength you need to deal with anxiety, sadness, and extreme stress, despite the fact that many people don't think of it as a yoga pose. The symmetry of this posture and the base of your spine are two factors that help you overcome stress by giving you the feeling that nothing can unsettle you or push you off track.",
    "Child's pose is one of the most relaxing and soothing positions in yoga. You may relax and unwind here since you're completely grounded. In times of anxiety and distress, the feeling of being supported by the soil can bring considerable mental peace.",
    "Downward Facing Dog Pose3/5 In Yoga, this is a very prevalent practice. It boosts blood flow to your brain while also stretching your spine and strengthening your arms, shoulders, and legs. We can get more energy and mental clarity by increasing circulation to this area, which will aid us in dealing with issues that bring us tension or anxiety.",
    "Another great yoga practise for anxiety and depression relief is shoulderstand. Shoulderstand, like downward-facing dog, enhances blood flow to the brain, improving mental clarity and regulating feelings. It's necessary to highlight that you should avoid this position, if you have neck or shoulder difficulties, high blood pressure, or are menstruating.",
    "This meditation posture is great for mind control, releasing stress, anxiety, and depression while also bringing clarity to your experience. This position is usually done at the end of each yoga session to allow you to absorb all of the energy and revelations you've gained throughout your exercise.",
  ];
  return (
    <div>
      <div className="font-semibold text-6xl text-center mt-8 mb-3">
        <a className="text-purple-600 font-bold text-8xl">YOGA</a> IS A LIFESTYLE
      </div>
      <div className="p-5 flex flex-wrap">
        {name.map((n, i) => {
          return (
            <div className="m-4">
              <YogaCards name={name[i]} link={link[i]} details={details[i]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Yoga;
