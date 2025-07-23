export default function Skills () {
    return (
        <div className="*:not-last:pb-4 *:*:text-lg *:*:select-none">
            <div className="flex flex-row text-center justify-center gap-2">
                <p>Mobile and Web Development: </p>
                <img src="/htmlIcon.svg" alt="Html" className="invert size-6"/>
                <img src="/cssIcon.svg" alt="Css" className="invert size-6"/>
                <img src="/jsIcon.svg" alt="JavaScript" className="invert size-6"/>
                <img src="/angularIcon.svg" alt="Angular" className="invert size-6"/>
                <img src="/reactIcon.svg" alt="React" className="invert size-6"/>
                <img src="/tsIcon.svg" alt="TypeScript" className="invert size-6"/>
                <img src="/luaIcon.svg" alt="Lua" className="invert size-6"/>
            </div>
            <div className="flex gap-2">
                <p>UI/UX Design: </p>
                <img src="/figmaIcon.svg" alt="Figma" className="invert size-6"/>
                <img src="/photoshopIcon.svg" alt="PhotoShop" className="invert size-6"/>
                <img src="/aftereffectsIcon.svg" alt="After Effects" className="invert size-6"/>
                <img src="/premiereIcon.svg" alt="Premiere" className="invert size-6"/>
            </div>
            <div className="flex gap-2">
                <p>Back-End: </p>
                <img src="/postgresIcon.svg" alt="Postgres" className="invert size-6"/>
            </div>
        </div>
    );
}