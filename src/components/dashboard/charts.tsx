import { StyledDarkParagraphText } from "@components"
import { useCustomStyletron } from "../../styles/custom-styles"
import { PulseLoader } from 'react-spinners'
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.defaults.hover.intersect = false;

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
    Legend,
    // ZoomPlugin
);
import isSameMinute from "date-fns/isSameMinute";
import isSameDay from "date-fns/isSameDay";
import isSameMonth from "date-fns/isSameMonth";
export const Guage: React.FC<{ value: number }> = ({ value = 100 }) => {
    const [css, theme] = useCustomStyletron()
    return <div className={css({
        width: '100%',
        marginBottom: '20px',
        height: 'fit-content',
        padding: '0 5px 50px',
        [theme.mediaQuery.small]: {
            padding: '0 10px 100px',

        },
        background: '#F8F8F8',
        borderRadius: '30px',

    })}>
        <div
            style={{
                position: "relative",
                // margin: "200px auto",
                height: "fit-content",
                width: "fit-content",
                margin: '0 auto'


            }}
        >
            <div
                style={{
                    height: 180,
                    overflow: "hidden"
                }}
            >
                <div
                    className="arc"
                    style={{
                        width: 180,
                        height: 180,
                        borderRadius: "50%",
                        border: "1px solid black",
                        margin: "0 auto",
                        transform: "translateY(50%)",
                        position: 'relative',
                    }}
                >
                    <div
                        className="semi"
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: "calc(50% + 3px)",
                            height: "calc(100% + 6px)",
                            background: "none",
                            borderColor: '#FFAE00',
                            borderStyle: 'solid',
                            borderWidth: "4px 1px 4px 4px",
                            borderTopLeftRadius: "103px",
                            borderBottomLeftRadius: "103px",
                            transform: `translate(-3px, -3px) rotate(${(value / 100) * 180 - 90}deg)`,
                            transformOrigin: "100% calc(50% - 0px)"
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0, right: 0, width: 8, height: 8, borderRadius: '50%',
                            background: '#FFAE00',
                            transform: 'translate(50%, calc(-100% + 2px))'
                        }} />
                        <div style={{
                            position: 'absolute',
                            top: 0, right: 0,
                            transform: `translate(calc(50% ${value < 10 ? "+ 15px" : value > 90 ? "- 10px" : "+ 0px"}), calc(-100% - 10px))`,
                            width: '30px',
                            fontSize: '14px',
                            zIndex: 1,
                            textAlign: 'center', padding: '1px', borderRadius: '7px', background: theme.colors.dark, color: '#fff'
                        }}>{value}</div>

                    </div>
                </div>
            </div>
            <div
                className="dot"
                style={{
                    width: 15,
                    height: 15,
                    background: theme.colors.dark,
                    position: "absolute",
                    left: "50%",
                    bottom: 0,
                    borderRadius: "50%",
                    transform: "translate(-50%, 50%)"
                }}
            />
            <div style={{ width: 240, height: 4, background: theme.colors.secondary, margin: '0 auto' }} />
            <div className={css({ width: '100%', padding: '5px 10px', ...theme.typography.font(15, 400), display: 'flex', position: "absolute", justifyContent: 'space-between', alignItems: 'center' })}>
                <div style={{ width: '40px', textAlign: 'center', padding: '1px', borderRadius: '7px', background: theme.colors.dark, color: '#fff' }}>0</div>
                <div style={{ width: '40px', textAlign: 'center', padding: '1px', borderRadius: '7px', background: theme.colors.dark, color: '#fff' }}>100</div>
            </div>
        </div>
    </div>

}

export const Guages = ({ data, loading }) => {
    const [css, theme] = useCustomStyletron();

    return <div className={css({
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        background: "#fff",
        position: 'relative',

    })}>
        {loading && <div className={css({
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, .01)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(5px)',
            zIndex: 1,

        })}><PulseLoader /></div>}
        <div style={{ flex: 1, maxWidth: '100%' }}>
            <Guage value={data.clicked?.length} />
            <StyledDarkParagraphText align="center" weight={600}>Emails opened</StyledDarkParagraphText>
        </div>
        <div style={{ flex: 1, maxWidth: '100%' }}>
            <Guage value={data.clicked?.length} />
            <StyledDarkParagraphText align="center" weight={600}>Clicked links</StyledDarkParagraphText>
        </div>
        <div style={{ flex: 1, maxWidth: '100%' }}>
            <Guage value={0} />
            <StyledDarkParagraphText align="center" weight={600}>Submitted data</StyledDarkParagraphText>
        </div>
        <div style={{ flex: 1, maxWidth: '100%' }}>
            <Guage value={0} />
            <StyledDarkParagraphText align="center" weight={600}>Emails reported</StyledDarkParagraphText>
        </div>
    </div>
}

export const LineChart = ({ labels, data, range, isMobile = false }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: "index" as const,
            intersect: false,
        },
        plugins: {
            legend: {
                display: false,
                position: 'top' as const,
            },
            title: {
                display: false,
                position: 'bottom' as const,
            },
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true // SET SCROOL ZOOM TO TRUE
                    },
                    pinch: {
                        enabled: true
                    },
                    drag: {
                        enabled: true,
                        backgroundColor: '#35BA6E',
                        threshold: 100,

                    },
                    mode: "x" as const,
                    // speed: 10
                },
                pan: {
                    enabled: true,
                    mode: "xy" as const,
                    speed: 10
                }
            },
            tooltips: {
                mode: "index",
                intersect: false,
            },
            hover: {
                mode: "nearest" as const,
                intersect: true,
            },
        },
        scales: {
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Emails Clicked'
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 1

                }
            },
            x: {
                display: true,
                title: {
                    display: false,
                    text: 'Time'
                },
                scaleLabel: {
                    display: true,
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 5,
                    maxTicksLimit: 10,
                    major: {
                        enabled: true
                    },
                    type: 'time',
                    ticks: {
                        source: 'data'
                    },
                    time: {
                        unit: "minute"
                    },
                    color: (context: any) => context.tick && context.tick.major && '#FF0000',
                    font: function (context: any) {
                        if (context.tick && context.tick.major) {
                            return {
                                weight: 'bold'
                            };
                        }
                    }

                }
            }
        }
    };


    // console.log('data', labelData1)
    const chartData = {
        labels: labels?.map(v => v.label),
        datasets: [
            {
                fill: true,
                // showLine: true,
                // // spanGaps: true,
                label: 'Emails Clicked',
                data: filterData(data, labels, range),
                borderColor: '#35BA6E',
                backgroundColor: '#fff',
                lineBackgroundColor: 'transparent',
                borderWidth: isMobile ? .8 : 1.3,
                lineTension: 0,
                borderJoinStyle: "bevel" as const,
                pointBorderWidth: isMobile ? 2 : 3,
                pointHoverRadius: 5,
                pointHoverBorderWidth: .5,
                pointHitRadius: 2,
                pointRadius: 1,
                pointBackgroundColor: "#35BA6E",
                // cubicInterpolationMode: 'monotone' as const
            }
        ],

    };

    return <div style={{ width: '100%', overflowX: 'scroll', height: '300px', padding: '20px 0' }}>
        <div style={{ position: 'relative', minWidth: "max(500px, 100%)", height: '100%' }}>
            <Line options={options} data={chartData} />
            {!data?.length && <div style={{
                position: 'absolute',
                fontSize: '12px',
                height: '100%',
                width: '100%',
                fontWeight: 400,
                color: "#222",
                top: 0,
                left: 0,
                display: 'grid',
                placeItems: 'center'
            }}>
                <p>No data available for selected time range</p>
            </div>}
        </div>
    </div>

}

const filterData = (data, labels, range) => {
    if (!labels || !data) return []
    const filterFunction = () => {
        switch (range) {
            case 'today':
            case '1d':
                return isSameMinute;
            case '7d':
                return isSameDay;
            case '1m':
            case '3m':
                return isSameDay;
            case '1y':
                return isSameMonth;
            default:
                return isSameMinute;
        }
    };

    const result = labels.map(
        ({ timestamp }, i) =>
            data.filter((d) =>
                filterFunction()(new Date(d.createdAt), new Date(timestamp))
            ).length
    );
    console.log('labels', labels);
    console.log('data', data);
    console.log('resu;lt', result);
    return result

}