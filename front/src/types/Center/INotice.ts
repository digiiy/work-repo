// INotice.tsx
export default interface INotice {
    noticeId?: any | null,
    noticeWriter: string,
    noticeContent: string,
    noticeTitle: string,
    memberId: string,
    insertTime: string,
    updateTime: string,
    deleteTime: string,
    deleteYn: string
}