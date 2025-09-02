import type { TDeveloperCard } from "./type"
import styles from './developerCard.module.scss'
import { TagNewSections } from "../tag/tag"
import { VscGithubAlt } from "react-icons/vsc";
import { PiTelegramLogo } from "react-icons/pi";

export const DeveloperCard = ({
    photo,
    nameDeveloper,
    jobTitle,
    description,
    skills,
    linkGitHub,
    linkTg,
}: TDeveloperCard) => {
    return(
    <div className={styles.container}>
        <div className={styles.content}>
<div className={styles.photoContainer}>
    <img src={photo} className={styles.photo}/>
</div>
<h3 className={styles.title}>{nameDeveloper}</h3>
<TagNewSections color={"pink"}>
    {jobTitle}
</TagNewSections>
<p className={styles.text}>
    {description}
</p>
<div className={styles.skills}>
        {skills.map((skill, index) => (
          <TagNewSections key={index} color={"purple"}>
            {skill}
          </TagNewSections>
        ))}
        </div>
      <div className={styles.developerLinks}>
        <button className={styles.button}>
      <a href={linkGitHub} className={styles.link} target="_blank">
    <VscGithubAlt size={'23px'} color="#831843"/>
    </a>
    </button>
    <button className={styles.button}>
    <a href={linkTg} className={styles.link} target="_blank">
    <PiTelegramLogo size={'23px'} color="#831843" />
    </a>
    </button>
    </div>
    </div>
        </div>
    )
}