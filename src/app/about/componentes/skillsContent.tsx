import HtmlIcon from './icones/htmlIcon.svg'
import CssIcon from './icones/cssIcon.svg'
import JsIcon from './icones/jsIcon.svg'
import AngularIcon from './icones/angularIcon.svg'
import ReactIcon from './icones/reactIcon.svg'
import TsIcon from './icones/tsIcon.svg'
import LuaIcon from './icones/luaIcon.svg'

export default function Skills () {
    return (
        <div className="*:not-last:pb-4 *:*:text-lg *:*:select-none">
            <div className="flex flex-col gap-2">
                <div className='pl-4'>
                    <p className="text-[#cccccc]">Mobile and Web Development: </p>
                </div>
                <div className='flex'>
                    <HtmlIcon className='invert scale-50'/>
                    <CssIcon className='invert scale-50'/>
                    <JsIcon className='invert scale-50'/>
                    <AngularIcon className='invert scale-50'/>
                    <ReactIcon className='invert scale-50'/>
                    <TsIcon className='invert scale-50'/>
                    <LuaIcon className='invert scale-50'/>
                </div>
            </div>
            <div className="flex gap-2">
                <p className="text-[#cccccc]">UI/UX Design: </p>
                <img src="/figmaIcon.svg" alt="Figma" className="invert size-6"/>
                <img src="/photoshopIcon.svg" alt="PhotoShop" className="invert size-6"/>
                <img src="/aftereffectsIcon.svg" alt="After Effects" className="invert size-6"/>
                <img src="/premiereIcon.svg" alt="Premiere" className="invert size-6"/>
            </div>
            <div className="flex gap-2">
                <p className="text-[#cccccc]">Back-End: </p>
                <img src="/postgresIcon.svg" alt="Postgres" className="invert size-6"/>
            </div>
        </div>
    );
}