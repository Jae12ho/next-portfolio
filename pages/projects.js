import Layout from "../components/layout"
import Head from "next/head"
import { DATABASE_ID, TOKEN } from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({projects}) {

    console.log(projects);

    return(
        <Layout>
          <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10">
            <Head>
                <title>빡코딩 포트폴리오</title>
                <meta name="description" content="오늘도 빡코딩" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-4xl font-bold sm:text-6xl">
              총 프로젝트 : 
              <span className="pl-4 text-blue-500">{projects.results.length}</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10 m-6 gap-8">
              {
                projects.results.map(project => (
                  <ProjectItem key={project.id} data={project} />
                ))
              }
            </div>
          </div>
        </Layout>
    )
}

// 빌드 타임에 호출
export async function getServerSideProps() {
    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          page_size: 100,
          sorts: [
            {
              "property": "Name",
              "direction": "ascending"
            }
          ]
        })
      };
      
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    
    const projects = await res.json();
    console.log(projects)
    const projectNames = projects.results.map((project) => (
        project.properties.Name.title[0] ? project.properties.Name.title[0].plain_text : '제목 없음'
    ))

    return {
      props: {projects}, // will be passed to the page component as props
    }
  }