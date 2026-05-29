import {useSectionView} from "../../hook/useSectionView.ts";

const TrackedSection: React.FC<{ id: string; className?: string, children: any }> = ({id, className, children}) => {
    const ref = useSectionView(id);
    return (
        <section ref={ref} id={id} className={className}>
            {children}
        </section>
    );
};

export default TrackedSection;