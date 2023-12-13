import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    let color = score > 95 ? "green" : score > 85 ? "yellow" : "";
    return (
        <Badge
            fontSize="14px"
            paddingX={2}
            borderRadius="4px"
            variant="solid"
            colorScheme={color}
        >
            {score}
        </Badge>
    );
};

export default CriticScore;
