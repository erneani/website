import React from "react";
import { Box } from "@material-ui/core";
import { Colors } from "styles";

type EducationCardType = {
  title: string;
  year: string;
  institution: string;
  extraCurricularActivities?: string[];
};

export default function EducationCard({
  title,
  year,
  institution,
  extraCurricularActivities,
}: EducationCardType) {
  return (
    <Box
      py="15px"
      px="20px"
      bgcolor={Colors.primary}
      color={Colors.white}
      textAlign="left"
      fontSize="18px"
      borderRadius="5px"
      boxShadow="0px 5px 20px rgba(42, 58, 103, 0.2)"
      mb={1.5}
    >
      <Box>
        <Box component="span" fontWeight="bold">
          {title}{" "}
        </Box>
        ({year})
      </Box>
      <Box fontFamily="Raleway">{institution}</Box>
      <Box mt={1}>
        {extraCurricularActivities &&
          extraCurricularActivities.map((activitie) => (
            <Box display="flex" flexDirection="row" mb={0.5}>
              <Box
                width="3px"
                bgcolor={Colors.secondary}
                height="21px"
                mr={0.5}
                borderRadius="5px"
              ></Box>
              <Box fontFamily="Raleway">{activitie}</Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
