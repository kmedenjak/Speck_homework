import Section from '../components/Section/Section.jsx'
import Single from '../components/Single/Single.jsx'
import CourseImg from '../assets/images/lecture-1.jpg'


const CoursePage = () => {
  return ( 
  <>
      <Section title="Introduction" subtitle=""> 

        <Single img={CourseImg} 
        alt="Introduction"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Illum quibusdam cum dolore quia omnis delectus odit deleniti 
        expedita placeat quo! Consequuntur, maxime ipsa maiores sit 
        nulla iusto quisquam minus accusamus!Lorem Lorem ipsum dolor 
        sit amet, consectetur adipisicing elit. Expedita quisquam 
        neque debitis qui accusantium possimus, cupiditate molestias 
        nam suscipit eum laudantium. Cumque tempore itaque impedit 
        molestias obcaecati ratione iusto officia. Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. Aspernatur aut sint 
        exercitationem, itaque veniam quia corrupti voluptates 
        facilis laborum sit iure modi et aliquid laudantium, natus 
        velit. Saepe, eligendi reiciendis?">
        </Single>

      </Section>
  </>
  )
}

export default CoursePage