
import { PATHS } from '../../constants/paths';

const MenuBar = () => {
  return (
    <div className="bg-yellow-60 py-4 px-10">
      <div className="flex text-lg text-center font-bold text-goldbrown-90 space-x-14">
        <a href={PATHS.HISTORY}>히스토리</a>
        <a href={PATHS.FAVORITE}>즐겨찾기</a>
        <a href={PATHS.RECOMMEND}>추천받기</a>
      </div>
    </div>
  );
};

export default MenuBar