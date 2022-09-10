import Animation from './animation'
import Link from 'next/link'

export default function Here() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요 빡빡이입니다! 
                <br className="hidden lg:inline-block" /> 오늘도 빡코딩?
                </h1>
                <p className="mb-8 leading-relaxed">그리워 묻힌 다 나의 계집애들의 밤이 듯합니다. 동경과 그리워 사랑과 멀리 이름을 했던 하나 봅니다. 않은 보고, 까닭이요, 했던 북간도에 이름과, 한 버리었습니다. 나의 멀듯이, 남은 거외다. 오면 나는 강아지, 무덤 쓸쓸함과 있습니다. 하나에 때 보고, 헤일 까닭입니다. 헤는 같이 이름자 듯합니다. 슬퍼하는 밤을 쉬이 덮어 헤는 이름과, 위에 프랑시스 봅니다. 프랑시스 강아지, 하나에 밤을 별 이런 까닭입니다.</p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <a className="btn-project">프로젝트 보러가기</a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    )
}