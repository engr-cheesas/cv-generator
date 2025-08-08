const ProfSummary = ({profSummary, onChange}) => {
    return ( 
        <div> 
            <textarea 
                placeholder="Write at least 300 word summary"
                name="summary"
                value={profSummary.summary}
                rows={8}
                onChange={onChange}
                className="bg-gray-200 border border-gray-300 rounded-md mt-4 px-4 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
            </textarea>
        </div>
    );
}

export default ProfSummary;