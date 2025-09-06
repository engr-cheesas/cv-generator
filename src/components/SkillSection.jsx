const SkillSection = ({skillInfo, onChange, addSkill, deleteSkill, toggleEditSkill}) => {
    return (  
        <div> 
             {skillInfo.map((skillInfo, index) => 
            <div key={index}>
                <div className='flex flex-row gap-4 w-full mt-4'> 
                    <input type="text"
                        placeholder="Category"
                        value={skillInfo.skillCategory}
                        readOnly={!skillInfo.isEditing}
                        onClick={() => !skillInfo.isEditing && toggleEditSkill(index)}
                        name="skillCategory"
                        onChange={(e) => onChange(index, "skillCategory", e.target.value)}
                        className="w-1/4 rounded-md px-4 py-2 bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition">
                    </input >
                    <input type="text"
                        placeholder="List of Skills"
                        value={skillInfo.skillName}
                        onClick={() => !skillInfo.isEditing && toggleEditSkill(index)}
                        readOnly={!skillInfo.isEditing}
                        name="skillName"
                        onChange={(e) => onChange(index, "skillName", e.target.value)}
                        className="w-3/4 bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 rounded-md px-4 py-2 transition">
                    </input>
                    {!skillInfo.isEditing && (
                        <button type="button"
                            onClick={() => deleteSkill(index)}
                            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"> 
                            ✕ 
                        </button>
                    )}
                </div>
            </div>
            )}
            <button type="button"
                onClick={addSkill}
                className="px-4 py-2 rounded text-white transition w-full bg-blue-500 mt-4"> 
                + 
            </button>
        </div>
    );
}

export default SkillSection;