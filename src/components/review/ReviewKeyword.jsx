import toast from 'react-hot-toast';
import { produce } from 'immer';
import { useState } from 'react';
import KEYWORDS from '@d/keywords';


function ReviewKeyword() {

  const [selectedKeyword, setSelectedKeyword] = useState([]);

  const handleKeywordClick = (keywordId) => {
    if (selectedKeyword.includes(keywordId)) {
      setSelectedKeyword(
        produce(selectedKeyword, (draft) => {
          draft.splice(draft.indexOf(keywordId), 1);
        })
      );
    } else if (selectedKeyword.length < 5) { // 최대 개수 제한
      setSelectedKeyword(
        produce(selectedKeyword, (draft) => {
          draft.push(keywordId);
        })
      );
    } else { // 선택 개수가 이미 최대값(5)인 경우 경고 메시지 표시
      toast("최대 5개까지만 선택할 수 있습니다.",{
        duration: 2000,
        icon: "❗",
        style:{
          background: "#e0f2fe",
          color: "#000",
          borderRadius: "28px",
          padding: "12px"
        },
        ariaProps:{
          role: "alert",
          'aria-live': 'polite'
        }
      });
    }
  };

  const listItems = KEYWORDS.map(keyword => (
    <li key={keyword.id} className="mb-2">
      <button type="button"
      className={`min-w-max px-3 py-2 rounded shadow-sm shadow-slate-300 
      ${selectedKeyword.includes(keyword.id) ? 'bg-primary text-white' : 'bg-gray-100 text-black'}`}
      onClick={() => handleKeywordClick(keyword.id)}
      >
        <span className="mr-2">{keyword.emoji}</span>{keyword.name}
      </button>
    </li>
  ));

  return (
    <div className="flex flex-col flex-wrap gap-2 w-full self-center">
      <p className="text-lg text-center font-semibold mt-5">어떤 점이 좋았나요?<span className="text-sm">(1개~5개)</span></p>
      <ul className="text-white text-xs flex flex-wrap gap-x-1 justify-center">{listItems}</ul>
    </div>
  )
}

export default ReviewKeyword