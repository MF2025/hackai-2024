import { Box, Typography, useMediaQuery } from "@mui/material";
import "@fontsource/hind-siliguri";

const sponserDir = "sponsers"
const sponsersLogos = [ ["AWS_logo_RGB.svg", "mavs-logo.png", "RISE1.png"],
                        ["Jasper.svg", "richardson-iq-logo.png", "geico.svg"], 
                        ["respell.svg", "TT.svg",  "Blackstone.png" ],
                        ["JSOM.svg", "CAIML.svg", "re-vvive-logo.png"] ]
const sponsorLinks =    [
                            "https://aws.amazon.com/machine-learning/",
                            "https://www.mavs.com/",
                            "https://jindal.utdallas.edu/centers-of-excellence/retail-innovation-strategy-excellence/",
                            "https://www.jasper.ai/",
                            "https://richardsoniq.com",
                            "https://careers.geico.com/us/en/c/information-technology-jobs",
                            "https://respell.ai/",
                            "https://techtitans.org/",
                            "https://innovation.utdallas.edu/programs/blackstone-launchpad/",
                            "https://jindal.utdallas.edu/",
                            "https://cs.utdallas.edu/caiml/",
                            "https://re-vive.com/",
                        ]
const sponsersPath = sponsersLogos.map((row) => row.map((path) => sponserDir + '/' + path))

const fontSize =  {
    title: "3rem",
    subHeading: "1.2rem",
}

function displaySponsers() {
    const mobile = useMediaQuery('(max-width:1023px)')

    return (
        sponsersPath.map((row, rowIndex) => {
            return (
                <Box sx={ mobile ? {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt:2
                } : {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    pt:2
                }}>
                    {row.map( (path, colIndex) => 
                        <img
                            src={path}
                            onClick={() => window.open(sponsorLinks[rowIndex*3 + colIndex], "_blank")}
                            className="h-[20vh] w-[20vw] object-contain [cursor:pointer]"
                        />
                    )}
                </Box>
            );
        })
    );
}

function Partners() {
    return (
        <Box marginY="3rem" className="bg-ais-new-blue" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Box color="#1A2025" sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Typography fontSize={fontSize.title} fontFamily={"var(--lucidity)"}>
                    Past Partners
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                width: "70%",
            }}>
                {displaySponsers()}
            </Box>
        </Box>
    );
}

export default Partners;