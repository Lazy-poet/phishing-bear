import { StyledParagraphText } from "@components";
import { useCustomStyletron } from "../../../styles/custom-styles";
import { ListItem } from "../";
export const PhishingTab = () => {
  const [css, theme] = useCustomStyletron();
  return (
    <div>
      <div
        className={css({
          width: "100%",
          position: "relative",
        })}
      >
        <img
          src="/assets/images/hacked.svg"
          className={css({
            display: "none",
            [theme.mediaQuery.xsmall]: {
              display: "block",
              width: "150px",
            },
            [theme.mediaQuery.small]: {
              width: "300px",
            },
            position: "absolute",
            bottom: "-20px",
            right: 0,
            height: "auto",
          })}
        />
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            flexFlow: "column",
            margin: "0 auto 40px",
            padding: "0 5vw",
            gap: "30px",
            [theme.mediaQuery.xsmall]: {
              padding: "0 50px",
              maxWidth: "900px",
              flexFlow: "row",
              gap: "80px",
              height: "fit-content",
            },
          })}
        >
          <div style={{ flex: 1.3 }}>
            <img
              src="/assets/images/awareness_bear.svg"
              className={css({
                height: "auto",
                width: "200px",
                maxHeight: "100%",
                [theme.mediaQuery.xsmall]: {
                  width: "100%",
                },
              })}
            />
          </div>
          <div
            style={{
              flex: 2,
            }}
          >
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "20px",
                marginBottom: "20px",
              })}
            >
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, .1)",
                  padding: "15px 17px",
                  width: "fit-content",
                  borderRadius: 10,
                }}
              >
                <img
                  src="/assets/images/ribbon.svg"
                  style={{ width: 20, height: 20 }}
                />
              </div>
              <StyledParagraphText weight={700} size="20px">
                Awareness
              </StyledParagraphText>
            </div>
            <StyledParagraphText size="13.5px" weight={400}>
              PhishingBear can help better prepare your employees to identify
              phishing emails and avoid the financial and repetitional risks
              associated with phishing and ransomware.
            </StyledParagraphText>
          </div>
        </div>
      </div>

      <div
        className={css({
          width: "100%",
          height: "fit-content",
          backgroundColor: "#30153D",
          position: "relative",
          transition: "all 0.3s ease-in-out",
          // margin: "50px auto",
          [theme.mediaQuery.small]: {
            borderTopRightRadius: "200px",
            borderBottomRightRadius: "200px",
            transform: "translateX(calc(525px - 50vw))",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          },
        })}
      >
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            flexFlow: "column",
            // margin: "0 auto",
            padding: "50px 5vw",
            gap: "30px",
            height: "fit-content",
            overflow: "hidden",

            [theme.mediaQuery.xsmall]: {
              padding: "50px 70px",
              maxWidth: "900px",
              flexFlow: "row",
              gap: "80px",
            },
          })}
        >
          <div
            className={css({
              flex: 1.7,
              [theme.mediaQuery.xsmall]: {
                order: 2,
              },
            })}
          >
            <img
              src="/assets/images/response_bear.svg"
              className={css({
                height: "auto",
                width: "200px",
                maxHeight: "100%",
                [theme.mediaQuery.xsmall]: {
                  width: "100%",
                },
              })}
            />
          </div>
          <div
            style={{
              flex: 2,
              width: "100%",
            }}
          >
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "20px",
                marginBottom: "20px",
              })}
            >
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, .1)",
                  padding: "15px 17px",
                  width: "fit-content",
                  borderRadius: 10,
                }}
              >
                <img
                  src="/assets/images/response_fist.svg"
                  style={{ width: 20, height: 20 }}
                />
              </div>
              <StyledParagraphText weight={700} size="20px">
                Response
              </StyledParagraphText>
            </div>
            <StyledParagraphText
              size="12px"
              weight={400}
              overrides={{ marginBottom: "20px" }}
            >
              Should your organisation be impacted by a phishing incident,
              PhishingBear can support with a rapid response capability.
            </StyledParagraphText>
            <StyledParagraphText size="15px" weight={600}>
              Activities include:
            </StyledParagraphText>
            <div>
              <ListItem text="Assessment of impact and damage" />
              <ListItem text="Immediately implement remediations to contain and limit further impact" />
              <ListItem text="Provide post-incident recommendations to reduce future exposure" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          flexFlow: "column",
          margin: "0 auto",
          padding: "50px 5vw",
          gap: "30px",

          [theme.mediaQuery.xsmall]: {
            padding: "50px",
            maxWidth: "900px",
            flexFlow: "row",
            gap: "80px",
            height: "500px",
          },
        })}
      >
        <div style={{ flex: 1.3 }}>
          <img
            src="/assets/images/prevention_bear.svg"
            className={css({
              height: "auto",
              width: "200px",
              maxHeight: "100%",
              [theme.mediaQuery.xsmall]: {
                width: "100%",
              },
            })}
          />
        </div>
        <div
          style={{
            flex: 2,
          }}
        >
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: "20px",
              marginBottom: "20px",
            })}
          >
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, .1)",
                padding: "15px 17px",
                width: "fit-content",
                borderRadius: 10,
              }}
            >
              <img
                src="/assets/images/prevention_icon.svg"
                style={{ width: 20, height: 20 }}
              />
            </div>
            <StyledParagraphText weight={700} size="20px">
              Prevention
            </StyledParagraphText>
          </div>
          <StyledParagraphText
            size="13.5px"
            weight={400}
            style={{ marginBottom: "20px" }}
          >
            PhishingBear support organisations with a layered response to
            prevention.
          </StyledParagraphText>
          <div>
            <ListItem text="Next Generation Email and Web Filtering Tools" />
            <ListItem text="Regular phishing simulations" />
            <ListItem text="Continuous learning" />
          </div>
        </div>
      </div>
    </div>
  );
};
