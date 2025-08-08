const SkillSection = ({skillInfo, onChange}) => {
    return (  
        <div> 
             {skillInfo.map((skillInfo, index) => 
            <div key={index}>
                <div className='flex flex-row gap-4 w-full mt-4'> 
                    <input type="text"
                        placeholder="Category"
                        value={skillInfo.skillCategory}
                        name="skillCategory"
                        onChange={(e) => onChange(index, "skillCategory", e.target.value)}
                        className="w-1/4 bg-gray-200 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
                    </input >
                    <input type="text"
                        placeholder="List of Skills"
                        value={skillInfo.skillName}
                        name="skillName"
                        onChange={(e) => onChange(index, "skillName", e.target.value)}
                        className="w-3/4 bg-gray-200 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
                    </input>
                </div>
            </div>
            )}
        </div>
    );
}

export default SkillSection;