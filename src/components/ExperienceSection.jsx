const ExperienceSection = ({experienceInfo, addRole, deleteRole, expIndex, updateExperienceInfo}) => {

    return (  
        <div className='flex flex-col gap-4 w-full mt-4'>
            <input type='text'
                placeholder='Position'
                value={experienceInfo.position}
                name="position"
                onChange={(e) => updateExperienceInfo(e, expIndex)}
                className="rounded-md font-inter px-4 py-2 w-full bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"/>
        
            <input type='text'
                placeholder='Company Name'
                value={experienceInfo.company}
                name="company"
                onChange={(e) => updateExperienceInfo(e, expIndex)}
                className="rounded-md font-inter px-4 py-2 w-full bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"/>
        
            <div className='flex flex-row gap-2'>  
                <input type='text'
                placeholder='Period'
                value={experienceInfo.period}
                name="period"
                onChange={(e) => updateExperienceInfo(e, expIndex)}
                className="rounded-md font-inter px-4 py-2 w-1/2 bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"/>
            
                <input type='text'
                placeholder="Company Location"
                value={experienceInfo.companyLoc}
                name="companyLoc"
                onChange={(e) => updateExperienceInfo(e, expIndex)}
                className="rounded-md font-inter px-4 py-2 w-1/2 bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"/>
            </div>

            <div className="flex gap-2"> 
                <input type='text'
                    placeholder='Role'
                    value={experienceInfo.inputRole}
                    name="inputRole"
                    onChange={(e) => updateExperienceInfo(e, expIndex)}
                    className="rounded-md font-inter px-4 py-2 w-full bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"/>
                    
                <button type="button"
                onClick={() => addRole(expIndex)}
                disabled={!experienceInfo.inputRole?.trim()}
                className={`px-4 py-2 rounded text-white transition 
                ${experienceInfo.inputRole?.trim() 
                    ? "bg-lime-900 hover:bg-lime-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}> 
                    + 
                </button>
            </div>

            {(experienceInfo?.roles?.length ?? 0) > 0 && (
                <div className="flex flex-col gap-2 mt-1"> 
                {experienceInfo.roles.map((role, roleIndex) => 
                    <div key={roleIndex} className="flex items-center gap-2"> 
                        <input type="text"
                        value={role}
                        readOnly
                        className="rounded-md px-4 py-2 w-full border bg-stone-100 text-gray-800 cursor-not-allowed">
                        </input>
                        <button type="button"
                        onClick={() => deleteRole(expIndex, roleIndex)}
                        className="bg-amber-900 hover:bg-amber-600 px-4 py-2 rounded text-white">
                            ✕
                        </button>
                    </div>
                )}
                </div>)}
        </div>

    );
}

export default ExperienceSection;