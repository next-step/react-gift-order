import { CategoryTab, TabCircle, TabRow, SortRow, SortTab } from '@/components/GiftRanking/GiftRanking.styles';
import { categoryTabs, sortTabs } from '@/components/GiftRanking/mockItem';

type Category = typeof categoryTabs[number];
type Sort = typeof sortTabs[number];

const categoryEmojis: Record<Category, string> = {
    전체: 'ALL',
    여성이: '👩',
    남성이: '👨',
    청소년이: '👦',
};

type Props = {
    selectedCategory: Category;
    selectedSort: Sort;
    onChangeCategory: (tab: Category) => void;
    onChangeSort: (tab: Sort) => void;
};

const GiftRankingFilter = ({
    selectedCategory,
    selectedSort,
    onChangeCategory,
    onChangeSort,
}: Props) => (
    <>
        <TabRow>
            {categoryTabs.map((tab) => (
                <CategoryTab
                    key={tab}
                    isSelected={selectedCategory === tab}
                    onClick={() => onChangeCategory(tab)}
                >
                    <TabCircle isSelected={selectedCategory === tab}>
                        {categoryEmojis[tab]}
                    </TabCircle>
                    {tab}
                </CategoryTab>
            ))}
        </TabRow>

        <SortRow>
            {sortTabs.map((tab) => (
                <SortTab
                    key={tab}
                    isSelected={selectedSort === tab}
                    onClick={() => onChangeSort(tab)}
                >
                    {tab}
                </SortTab>
            ))}
        </SortRow>
    </>
);

export default GiftRankingFilter;