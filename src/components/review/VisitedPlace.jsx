// const visitedPlaces = [
//   {
//     id: 'visited-1',
//     name: '투썸플레이스 상무번영로점',
//     subject: '카페',
//     location: '광주광역시 서구 치평동'
//   },
//   {
//     id: 'visited-2',
//     name: '스테이_STAY',
//     subject: '양식',
//     location: '광주광역시 북구 중흥동'
//   }
// ]

function VisitedPlace() {
  return (
    <div className="border-b-[1px] pb-2 w-full self-center">
      <h1 className="text-lg font-semibold">투썸플레이스 상무번영로점</h1>
      <p>카페<span className="mx-1">|</span>광주광역시 서구 치평동</p>
    </div>
  )
}

export default VisitedPlace