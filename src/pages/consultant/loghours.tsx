
export default function LogHours() {
    return (
    <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
        <div className="absolute left-67 top-132 text-black text-lg font-readex font-normal break-words">Timesheet ID: TS00001</div>

        <div style={{left: 67, top: 39, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Readex Pro', fontWeight: '400', wordWrap: 'break-word'}}>Log Hours</div>

        <div style={{left: 67, top: 267, position: 'absolute', color: '#7A7A7A', fontSize: 24, fontFamily: 'Readex Pro', fontWeight: '400', wordWrap: 'break-word'}}>Start:</div>

        <div style={{left: 67, top: 319, position: 'absolute', color: '#7A7A7A', fontSize: 24, fontFamily: 'Readex Pro', fontWeight: '400', wordWrap: 'break-word'}}>End:</div>

        <input type="time" style={{width: 76, height: 23, left: 134, top: 323, position: 'absolute', background: '#D9D9D9', borderRadius: 6}}/>

        <input type="time" style={{width: 76, height: 23, left: 134, top: 272, position: 'absolute', background: '#D9D9D9', borderRadius: 6}} />

        <div style={{left: 67, top: 373, position: 'absolute', color: '#7A7A7A', fontSize: 24, fontFamily: 'Readex Pro', fontWeight: '400', wordWrap: 'break-word'}}>Add tags:</div>

        <div style={{left: 67, top: 489, position: 'absolute', color: '#7A7A7A', fontSize: 24, fontFamily: 'Readex Pro', fontWeight: '400', wordWrap: 'break-word'}}>Add comment:</div>

        <input list="location" name="location" style={{width: 92, height: 22, left: 195, top: 443, position: 'absolute', background: '#D9D9D9', borderRadius: 6}} />
        <datalist id="location">
            <option value="Edge"/>
            <option value="Firefox"/>
            <option value="Chrome"/>
            <option value="Opera"/>
            <option value="Safari"/>
        </datalist>

        <input list="tag" name="tag" style={{width: 92, height: 22, left: 67, top: 443, position: 'absolute', background: '#D9D9D9', borderRadius: 6}} />
        <datalist id="tag">
            <option value="Edge"/>
            <option value="Firefox"/>
            <option value="Chrome"/>
            <option value="Opera"/>
            <option value="Safari"/>
        </datalist>

        <input style={{width: 92, height: 22, left: 323, top: 443, position: 'absolute', background: '#D9D9D9', borderRadius: 6}}/>

        <div style={{width: 78, height: 25, left: 67, top: 418, position: 'absolute', color: '#65ADED', fontSize: 20, fontFamily: 'Readex Pro', fontWeight: '400', wordWrap: 'break-word'}}>Client:</div>

        <div style={{width: 88, height: 25, left: 195, top: 418, position: 'absolute', color: '#6E25BD', fontSize: 20, fontFamily: 'Readex Pro', fontWeight: '400', wordWrap: 'break-word'}}>Location:</div>
        
        <div style={{width: 88, height: 30, left: 323, top: 418, position: 'absolute', color: '#8C43DB', fontSize: 20, fontFamily: 'Readex Pro', fontWeight: '400', wordWrap: 'break-word'}}>Custom:</div>

        <button type="submit" style={{width: 120, height: 31, left: 67, top: 684, position: 'absolute', background: '#D9D9D9', borderRadius: 3}}/>

        <div style={{width: 69, left: 94, top: 687, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Readex Pro', fontWeight: '400', wordWrap: 'break-word'}}>Submit</div>

        <textarea style={{width: 348, height: 129, left: 67, top: 525, position: 'absolute', background: '#D9D9D9', borderRadius: 6}} />
        
        <div style={{left: 67, top: 213, position: 'absolute', color: '#7A7A7A', fontSize: 24, fontFamily: 'Readex Pro', fontWeight: '400', wordWrap: 'break-word'}}>Date:</div>
        <input type="date" style={{width: 102, height: 23, left: 134, top: 220, position: 'absolute', background: '#D9D9D9', borderRadius: 6}} />
    </div>)}