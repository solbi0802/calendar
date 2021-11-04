

const AddScheduleDialog = () => {

    // 다이얼로그  창 닫기
    const close = (): void => {
        console.log('닫기')
    }
    return (<>
        <div className="add-schedule-dialog">
            <h1>일정 만들기</h1>
        </div>
        <button className="close-button"></button>
    </>
    )

}

export default AddScheduleDialog;