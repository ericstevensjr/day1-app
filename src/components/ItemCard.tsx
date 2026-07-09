interface ItemCardProps {
    name: string;
    category: string;
    askingPrice: number;
}

export default function ItemCard({ name, category, askingPrice }: ItemCardProps) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{category}</p>
            <p>${askingPrice}</p>
        </div>
    );
}