const SummarySection = ({profSummary, onChange}) => {
    return ( 
        <div> 
            <textarea 
                placeholder="Write at least 300 word summary"
                name="summary"
                value={profSummary.summary}
                rows={8}
                onChange={onChange}
                className="bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 rounded-md mt-4 px-4 py-2 w-full text-justify transition">
            </textarea>
        </div>
    );
}

export default SummarySection; 