import {createRoot} from 'react-dom/client'
import './index.css'
import {Header} from "./components/Header.tsx";
import {SidebarMenu} from "./components/SidebarMenu.tsx";
import {PageTitle} from "./components/PageTitle.tsx";
import {TrackList} from "./components/TrackList.tsx";
import {TrackDetail} from "./components/TrackDetail.tsx";
import {Footer} from "./components/Footer.tsx";

const rootEl = document.getElementById('root')
const reactRoot = createRoot(rootEl!)
reactRoot.render(<MainPage />)

function MainPage() {


    return <div>
        <Header/>
        <SidebarMenu/>
        <PageTitle/>
        <TrackList/>
        <TrackDetail/>
        <Footer/>
    </div>
}

