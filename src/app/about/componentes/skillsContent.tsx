"use client"
import { useState } from 'react'

import HtmlIcon from './icones/htmlIcon.svg'
import CssIcon from './icones/cssIcon.svg'
import JsIcon from './icones/jsIcon.svg'
import AngularIcon from './icones/angularIcon.svg'
import ReactIcon from './icones/reactIcon.svg'
import TsIcon from './icones/tsIcon.svg'
import LuaIcon from './icones/luaIcon.svg'
import FigmaIcon from './icones/figmaIcon.svg'
import PsIcon from './icones/photoshopIcon.svg'
import AeIcon from './icones/aftereffectsIcon.svg'
import PremiereIcon from './icones/premiereIcon.svg'
import PostIcon from './icones/postgresIcon.svg'
import { img } from 'framer-motion/client'
import HtmlHover from './icones/htmlHover.svg'
import CssHover from './icones/cssHover.svg'
import JsHover from './icones/jsHover.svg'
import AngularHover from './icones/angularHover.svg'
import ReactHover from './icones/reactHover.svg'
import TsHover from './icones/tsHover.svg'
import LuaHover from './icones/luaHover.svg'
import FigmaHover from './icones/figmaHover.svg'
import PsHover from './icones/psHover.svg'
import AeHover from './icones/aeHover.svg'
import PremiereHover from './icones/premiereHover.svg'
import PostHover from './icones/postHover.svg'


export default function Skills () {
    const [isHover, setHover] = useState (false);
    return (
        <div className="*:not-last:pb-4 *:*:text-lg *:*:select-none">
            <div className="flex flex-col ">
                <div className=''>
                    <p className="text-[#cccccc] font-medium tracking-wider">Mobile and Web Development: </p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{isHover ? <HtmlHover className='scale-70'/> : (<HtmlIcon className='invert scale-50'/>)}</div>
                    <div><CssIcon className='invert scale-50'/></div>
                    <div><JsIcon className='invert scale-50'/></div>
                    <div><AngularIcon className='invert scale-50'/></div>
                    <div><ReactIcon className='invert scale-50'/></div>
                    <div><TsIcon className='invert scale-50'/></div>
                    <div><LuaIcon className='invert scale-50'/></div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className=''>
                    <p className="text-[#cccccc] font-medium tracking-wider">UI/UX Design: </p>
                </div>
                <div className='flex gap-2 items-center'>
                    <div><FigmaIcon className='invert scale-50'/></div>
                    <div><PsIcon className='invert scale-50'/></div>
                    <div><AeIcon className='invert scale-50'/></div>
                    <div><PremiereIcon className='invert scale-50'/></div>
                </div>
            </div>
            <div className="flex flex-col">
                <div>
                    <p className="text-[#cccccc] font-medium tracking-wider">Back-End: </p>
                </div>
                <div className='flex gap-2 items-center'>
                    <div><PostIcon className='invert scale-50'/></div>
                </div>
            </div>
        </div>
    );
}