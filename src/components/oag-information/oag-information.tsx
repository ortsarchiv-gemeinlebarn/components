import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'oag-information',
    styleUrl: 'oag-information.scss',
    shadow: true,
})
export class OagInformation {

    render() {
        return (
            <Host>
                <oag-content>
                    <svg class="logo" viewBox="0 0 368 130" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g transform="matrix(1,0,0,1,-1294.4,-841.559)">
                            <g transform="matrix(0.235413,0,0,0.215295,1127.96,702.285)">
                                <path d="M771.987,714.247C780.483,714.247 788.518,715.834 796.094,719.008C803.669,722.182 810.324,726.555 816.059,732.129C821.793,737.703 826.324,744.322 829.652,751.986C832.979,759.65 834.643,768.049 834.643,777.184C834.643,786.628 832.979,795.298 829.652,803.194C826.324,811.091 821.793,817.903 816.059,823.631C810.324,829.36 803.669,833.85 796.094,837.101C788.518,840.353 780.483,841.978 771.987,841.978C763.633,841.978 755.704,840.391 748.199,837.217C740.695,834.044 734.111,829.592 728.447,823.864C722.783,818.135 718.323,811.284 715.066,803.311C711.809,795.337 710.181,786.628 710.181,777.184C710.181,768.049 711.809,759.611 715.066,751.87C718.323,744.128 722.783,737.471 728.447,731.897C734.111,726.323 740.695,721.988 748.199,718.892C755.704,715.795 763.633,714.247 771.987,714.247ZM771.987,727.717C767.739,727.717 763.845,728.917 760.306,731.316C756.766,733.716 753.757,737.084 751.279,741.419C748.801,745.754 746.889,750.979 745.544,757.095C744.199,763.211 743.527,769.984 743.527,777.416C743.527,785.157 744.199,792.124 745.544,798.317C746.889,804.51 748.801,809.775 751.279,814.11C753.757,818.445 756.73,821.812 760.199,824.212C763.668,826.612 767.598,827.812 771.987,827.812C776.377,827.812 780.377,826.612 783.987,824.212C787.598,821.812 790.678,818.406 793.226,813.994C795.775,809.581 797.757,804.278 799.173,798.085C800.589,791.892 801.297,785.002 801.297,777.416C801.297,769.984 800.589,763.249 799.173,757.211C797.757,751.173 795.775,745.947 793.226,741.535C790.678,737.122 787.598,733.716 783.987,731.316C780.377,728.917 776.377,727.717 771.987,727.717Z"></path>
                                <path d="M897.299,803.659C897.299,809.697 897.546,814.458 898.042,817.942C898.538,821.425 899.564,824.096 901.122,825.954C902.679,827.812 904.945,829.012 907.918,829.554C910.892,830.095 914.856,830.366 919.812,830.366L919.812,839.656L848.873,839.656L848.873,830.366C853.121,830.057 856.519,829.592 859.068,828.973C861.617,828.354 863.528,827.115 864.803,825.257C866.077,823.399 866.891,820.728 867.245,817.245C867.599,813.761 867.776,809.078 867.776,803.194L867.776,774.861C867.776,765.262 867.564,757.598 867.139,751.87C866.714,746.141 865.794,741.728 864.378,738.632C862.962,735.535 860.944,733.484 858.325,732.478C855.705,731.471 852.271,730.968 848.024,730.968L848.024,722.84L890.502,714.247L893.9,740.954L894.75,740.954C898.573,732.748 903.6,726.246 909.83,721.446C916.06,716.647 922.644,714.247 929.582,714.247C934.963,714.247 939.352,715.718 942.75,718.659C946.149,721.601 947.848,725.317 947.848,729.807C947.848,734.761 946.538,738.942 943.919,742.348C941.299,745.754 937.724,747.457 933.193,747.457C931.069,747.457 929.157,746.992 927.458,746.064C925.759,745.135 924.237,744.089 922.892,742.928C921.547,741.767 920.202,740.683 918.856,739.677C917.511,738.671 916.131,738.167 914.715,738.167C912.024,738.167 909.476,740.103 907.069,743.973C904.661,747.844 902.679,753.031 901.122,759.533C899.989,764.178 899.068,769.404 898.361,775.21C897.653,781.016 897.299,786.783 897.299,792.511L897.299,803.659Z"></path>
                                <path d="M953.582,729.342L953.582,718.892C962.078,716.259 969.193,712.273 974.928,706.931C980.663,701.59 984.946,695.435 987.778,688.468L998.61,688.468L998.61,716.569L1023.03,716.569L1023.03,729.342L998.61,729.342L998.61,800.64C998.61,810.239 999.565,817.051 1001.48,821.077C1003.39,825.102 1006.61,827.115 1011.14,827.115C1016.66,827.115 1020.84,824.328 1023.67,818.754L1028.13,825.489C1024.17,836.482 1014.82,841.978 1000.1,841.978C990.326,841.978 982.716,839.501 977.264,834.547C971.813,829.592 969.087,822.625 969.087,813.645L969.087,729.342L953.582,729.342Z"></path>
                                <path d="M1047.46,839.656L1040.88,839.656L1040.88,797.388L1049.8,797.388C1052.2,808.536 1055.67,816.664 1060.2,821.774C1064.73,826.883 1070.61,829.437 1077.83,829.437C1083.07,829.437 1087.14,828.238 1090.05,825.838C1092.95,823.438 1094.4,820.148 1094.4,815.968C1094.4,811.632 1092.63,807.413 1089.09,803.311C1085.55,799.208 1079.81,794.834 1071.88,790.189C1061.12,783.841 1053.41,777.532 1048.73,771.261C1044.06,764.991 1041.72,757.908 1041.72,750.012C1041.72,744.902 1042.61,740.141 1044.38,735.729C1046.15,731.316 1048.56,727.484 1051.6,724.233C1054.65,720.982 1058.29,718.466 1062.54,716.685C1066.79,714.905 1071.39,714.015 1076.35,714.015C1080.74,714.015 1085.09,714.711 1089.41,716.105C1093.73,717.498 1097.51,719.433 1100.77,721.911L1104.59,716.337L1110.12,716.337L1110.12,751.405L1101.83,751.405C1098.58,742.58 1095.21,736.232 1091.74,732.361C1088.28,728.491 1084.06,726.555 1079.11,726.555C1075.14,726.555 1071.99,727.717 1069.65,730.039C1067.32,732.361 1066.15,735.458 1066.15,739.329C1066.15,743.664 1067.88,747.767 1071.35,751.637C1074.82,755.508 1080.59,759.766 1088.66,764.41C1094.33,767.817 1099.21,771.145 1103.32,774.397C1107.42,777.648 1110.75,780.938 1113.3,784.267C1115.85,787.596 1117.73,791.079 1118.93,794.718C1120.13,798.356 1120.74,802.265 1120.74,806.446C1120.74,811.865 1119.82,816.742 1117.97,821.077C1116.13,825.412 1113.51,829.128 1110.12,832.224C1106.72,835.321 1102.65,837.721 1097.9,839.424C1093.16,841.127 1087.88,841.978 1082.08,841.978C1075.99,841.978 1070.33,841.088 1065.09,839.308C1059.85,837.527 1055.53,834.934 1052.13,831.528L1047.46,839.656Z"></path>
                                <path d="M1201.44,773.468C1189.55,779.351 1180.59,784.809 1174.58,789.841C1168.56,794.872 1165.55,800.098 1165.55,805.517C1165.55,810.007 1166.68,813.568 1168.95,816.2C1171.21,818.832 1174.05,820.148 1177.44,820.148C1180.84,820.148 1184.03,819.49 1187,818.174C1189.98,816.858 1192.52,815.116 1194.65,812.948C1196.77,810.781 1198.43,808.188 1199.64,805.168C1200.84,802.149 1201.44,798.937 1201.44,795.53L1201.44,773.468ZM1201.44,761.159L1201.44,751.405C1201.44,742.425 1199.99,735.884 1197.09,731.781C1194.19,727.678 1189.69,725.626 1183.6,725.626C1179.5,725.626 1176.38,726.826 1174.26,729.226C1172.13,731.626 1170.15,735.613 1168.31,741.186C1167.04,745.057 1165.23,748.076 1162.89,750.244C1160.56,752.411 1157.34,753.495 1153.23,753.495C1149.27,753.495 1146.22,752.179 1144.1,749.547C1141.97,746.915 1140.91,743.199 1140.91,738.4C1140.91,730.968 1144.63,725.085 1152.06,720.749C1159.5,716.414 1170.72,714.247 1185.73,714.247C1201.59,714.247 1212.91,717.382 1219.71,723.652C1226.51,729.923 1229.9,740.412 1229.9,755.121L1229.9,805.981C1229.9,819.141 1232.31,825.722 1237.13,825.722C1239.82,825.722 1242.29,824.715 1244.56,822.702L1247.75,829.437C1245.76,833.308 1242.68,836.366 1238.51,838.611C1234.33,840.856 1229.62,841.978 1224.38,841.978C1217.87,841.978 1212.91,839.811 1209.52,835.476C1206.12,831.141 1204.42,825.025 1204.42,817.129L1203.36,817.129C1199.25,825.18 1193.94,831.295 1187.43,835.476C1180.91,839.656 1173.48,841.746 1165.12,841.746C1156.2,841.746 1149.05,838.998 1143.67,833.502C1138.29,828.005 1135.6,820.845 1135.6,812.019C1135.6,805.207 1138.36,798.821 1143.89,792.86C1149.41,786.899 1158.61,781.054 1171.5,775.326L1201.44,761.159Z"></path>
                                <path d="M1305.09,803.659C1305.09,809.697 1305.34,814.458 1305.84,817.942C1306.33,821.425 1307.36,824.096 1308.91,825.954C1310.47,827.812 1312.74,829.012 1315.71,829.554C1318.68,830.095 1322.65,830.366 1327.61,830.366L1327.61,839.656L1256.67,839.656L1256.67,830.366C1260.91,830.057 1264.31,829.592 1266.86,828.973C1269.41,828.354 1271.32,827.115 1272.6,825.257C1273.87,823.399 1274.68,820.728 1275.04,817.245C1275.39,813.761 1275.57,809.078 1275.57,803.194L1275.57,774.861C1275.57,765.262 1275.36,757.598 1274.93,751.87C1274.51,746.141 1273.59,741.728 1272.17,738.632C1270.76,735.535 1268.74,733.484 1266.12,732.478C1263.5,731.471 1260.07,730.968 1255.82,730.968L1255.82,722.84L1298.3,714.247L1301.69,740.954L1302.54,740.954C1306.37,732.748 1311.39,726.246 1317.62,721.446C1323.85,716.647 1330.44,714.247 1337.38,714.247C1342.76,714.247 1347.14,715.718 1350.54,718.659C1353.94,721.601 1355.64,725.317 1355.64,729.807C1355.64,734.761 1354.33,738.942 1351.71,742.348C1349.09,745.754 1345.52,747.457 1340.99,747.457C1338.86,747.457 1336.95,746.992 1335.25,746.064C1333.55,745.135 1332.03,744.089 1330.68,742.928C1329.34,741.767 1328,740.683 1326.65,739.677C1325.3,738.671 1323.92,738.167 1322.51,738.167C1319.82,738.167 1317.27,740.103 1314.86,743.973C1312.45,747.844 1310.47,753.031 1308.91,759.533C1307.78,764.178 1306.86,769.404 1306.15,775.21C1305.45,781.016 1305.09,786.783 1305.09,792.511L1305.09,803.659Z"></path>
                                <path d="M1466.93,820.38C1461.55,826.883 1454.86,831.915 1446.86,835.476C1438.86,839.037 1430.19,840.817 1420.85,840.817C1412.21,840.817 1404.35,839.308 1397.27,836.288C1390.19,833.269 1384.1,829.05 1379,823.631C1373.91,818.213 1369.98,811.671 1367.22,804.007C1364.45,796.343 1363.08,787.867 1363.08,778.577C1363.08,768.978 1364.56,760.23 1367.54,752.334C1370.51,744.438 1374.69,737.664 1380.07,732.013C1385.45,726.362 1391.89,721.988 1399.39,718.892C1406.9,715.795 1415.18,714.247 1424.24,714.247C1430.62,714.247 1436.53,714.943 1441.98,716.337C1447.43,717.73 1452.1,719.666 1456,722.143C1459.89,724.62 1462.97,727.523 1465.24,730.852C1467.5,734.181 1468.63,737.78 1468.63,741.651C1468.63,746.141 1467.47,749.702 1465.13,752.334C1462.79,754.966 1459.64,756.282 1455.68,756.282C1452.42,756.282 1449.55,755.353 1447.08,753.495C1444.6,751.637 1442.15,748.618 1439.75,744.438C1437.62,740.722 1435.82,737.78 1434.33,735.613C1432.85,733.445 1431.46,731.781 1430.19,730.62C1428.92,729.458 1427.64,728.684 1426.37,728.297C1425.09,727.91 1423.54,727.717 1421.69,727.717C1413.48,727.717 1407.11,731.897 1402.58,740.258C1398.05,748.618 1395.78,760.308 1395.78,775.326C1395.78,791.428 1398.51,803.814 1403.96,812.484C1409.41,821.154 1417.24,825.489 1427.43,825.489C1433.24,825.489 1439.04,824.289 1444.85,821.89C1450.65,819.49 1456.17,816.045 1461.41,811.555L1466.93,820.38Z"></path>
                                <path d="M1526.4,801.569C1526.4,807.917 1526.58,812.91 1526.93,816.548C1527.29,820.187 1528.07,823.012 1529.27,825.025C1530.48,827.038 1532.32,828.354 1534.79,828.973C1537.27,829.592 1540.63,830.057 1544.88,830.366L1544.88,839.656L1477.98,839.656L1477.98,830.366C1482.23,830.057 1485.62,829.592 1488.17,828.973C1490.72,828.354 1492.63,827.115 1493.91,825.257C1495.18,823.399 1496,820.728 1496.35,817.245C1496.7,813.761 1496.88,809.078 1496.88,803.194L1496.88,707.744C1496.88,698.454 1496.78,691.139 1496.56,685.797C1496.35,680.456 1495.96,676.392 1495.39,673.605C1494.97,671.592 1494.48,670.005 1493.91,668.844C1493.34,667.683 1492.46,666.754 1491.25,666.057C1490.05,665.36 1488.42,664.896 1486.37,664.664C1484.32,664.431 1481.73,664.315 1478.62,664.315L1478.62,655.722L1525.98,646.897L1525.98,732.594L1526.83,732.594C1531.22,726.246 1536.14,721.601 1541.59,718.659C1547.04,715.718 1553.59,714.247 1561.24,714.247C1575.11,714.247 1585.87,718.892 1593.52,728.181C1597.2,732.826 1600.1,738.438 1602.23,745.018C1604.35,751.599 1605.41,758.45 1605.41,765.572L1605.41,801.569C1605.41,808.071 1605.56,813.142 1605.84,816.78C1606.12,820.419 1606.87,823.206 1608.07,825.141C1609.27,827.076 1611.08,828.354 1613.49,828.973C1615.89,829.592 1619.22,830.057 1623.47,830.366L1623.47,839.656L1556.99,839.656L1556.99,830.366C1561.24,830.212 1564.6,829.786 1567.08,829.089C1569.56,828.392 1571.47,827.115 1572.81,825.257C1574.16,823.399 1575.01,820.728 1575.36,817.245C1575.72,813.761 1575.89,809.078 1575.89,803.194L1575.89,774.629C1575.89,758.217 1574.26,746.605 1571.01,739.793C1567.75,732.981 1562.16,729.575 1554.23,729.575C1545.73,729.575 1539.01,732.981 1534.05,739.793C1531.64,743.354 1529.77,747.767 1528.42,753.031C1527.08,758.295 1526.4,764.178 1526.4,770.681L1526.4,801.569Z"></path>
                                <path d="M1680.81,801.569C1680.81,807.762 1681.03,812.716 1681.45,816.432C1681.88,820.148 1682.73,823.012 1684,825.025C1685.27,827.038 1687.12,828.392 1689.52,829.089C1691.93,829.786 1695.18,830.212 1699.29,830.366L1699.29,839.656L1632.39,839.656L1632.39,830.366C1636.35,830.212 1639.57,829.708 1642.05,828.857C1644.53,828.005 1646.44,826.612 1647.79,824.677C1649.13,822.741 1650.05,820.032 1650.55,816.548C1651.04,813.065 1651.29,808.613 1651.29,803.194L1651.29,774.629C1651.29,765.649 1651.15,758.256 1650.87,752.45C1650.58,746.644 1650.23,742.657 1649.8,740.49C1649.1,736.619 1647.5,734.064 1645.03,732.826C1642.55,731.587 1638.05,730.968 1631.54,730.968L1631.54,723.072L1680.81,714.247L1680.81,801.569ZM1649.59,665.012C1649.59,659.903 1651.18,655.606 1654.37,652.123C1657.56,648.639 1661.41,646.897 1665.95,646.897C1670.62,646.897 1674.55,648.639 1677.73,652.123C1680.92,655.606 1682.51,659.903 1682.51,665.012C1682.51,669.966 1680.92,674.185 1677.73,677.669C1674.55,681.153 1670.62,682.894 1665.95,682.894C1661.41,682.894 1657.56,681.153 1654.37,677.669C1651.18,674.185 1649.59,669.966 1649.59,665.012Z"></path>
                                <path d="M1722.23,746.528C1720.67,742.038 1719.19,738.438 1717.77,735.729C1716.35,733.019 1714.9,730.929 1713.42,729.458C1711.93,727.988 1710.3,727.02 1708.53,726.555C1706.76,726.091 1704.67,725.859 1702.27,725.859L1702.27,716.569L1765.77,716.569L1765.77,725.859C1762.23,725.859 1759.43,726.014 1757.38,726.323C1755.33,726.633 1753.77,727.097 1752.71,727.717C1751.65,728.336 1750.97,729.149 1750.69,730.155C1750.41,731.162 1750.27,732.284 1750.27,733.523C1750.27,735.535 1750.62,737.858 1751.33,740.49C1752.04,743.122 1752.88,745.754 1753.88,748.386L1774.05,809.233L1774.9,809.233L1797.63,748.618C1798.62,745.986 1799.4,743.625 1799.97,741.535C1800.53,739.445 1800.82,737.548 1800.82,735.845C1800.82,732.439 1799.75,729.962 1797.63,728.413C1795.51,726.865 1791.75,726.014 1786.37,725.859L1786.37,716.569L1833.31,716.569L1833.31,725.859C1829.49,725.859 1826.2,726.942 1823.43,729.11C1820.67,731.278 1817.81,736.077 1814.83,743.509L1775.12,841.978L1755.79,841.978L1722.23,746.528Z"></path>
                                <path d="M750.748,1162.93C754.571,1163.24 757.934,1163.55 760.837,1163.86C763.739,1164.17 766.5,1164.52 769.12,1164.91C771.739,1165.29 774.359,1165.68 776.978,1166.07C779.598,1166.45 782.394,1166.88 785.368,1167.35C796.412,1169.05 805.085,1173.58 811.386,1180.93C817.687,1188.29 820.837,1197.38 820.837,1208.22C820.837,1221.38 815.882,1231.37 805.97,1238.18C796.058,1244.99 781.474,1248.4 762.217,1248.4C744.518,1248.4 730.889,1245.57 721.332,1239.92C711.774,1234.27 706.995,1226.26 706.995,1215.88C706.995,1207.83 708.907,1201.76 712.73,1197.65C716.553,1193.55 721.367,1191.5 727.172,1191.5C730.854,1191.5 734.429,1192.31 737.898,1193.94C741.367,1195.56 744.305,1197.92 746.712,1201.02C743.031,1201.79 740.022,1203.61 737.686,1206.48C735.349,1209.34 734.181,1212.71 734.181,1216.58C734.181,1222.77 736.695,1227.53 741.721,1230.86C746.748,1234.19 754.146,1235.86 763.916,1235.86C785.155,1235.86 795.775,1228.5 795.775,1213.79C795.775,1208.53 794.182,1204 790.996,1200.21C787.81,1196.41 783.244,1194.13 777.297,1193.36L740.128,1187.78C724.411,1185.46 716.553,1177.8 716.553,1164.79C716.553,1158.44 718.429,1153.26 722.181,1149.23C725.933,1145.2 731.279,1142.42 738.217,1140.87L738.217,1139.94C734.96,1138.55 732.022,1136.61 729.402,1134.13C726.783,1131.66 724.482,1128.79 722.5,1125.54C720.517,1122.29 718.995,1118.77 717.933,1114.98C716.871,1111.18 716.34,1107.27 716.34,1103.25C716.34,1097.52 717.438,1092.14 719.632,1087.11C721.827,1082.08 724.871,1077.78 728.765,1074.22C732.659,1070.66 737.261,1067.83 742.571,1065.74C747.881,1063.65 753.651,1062.61 759.881,1062.61C765.969,1062.61 771.916,1063.61 777.722,1065.62C783.527,1067.64 788.483,1070.42 792.589,1073.99C795.846,1071.82 798.678,1070 801.085,1068.53C803.492,1067.06 805.722,1065.9 807.775,1065.04C809.828,1064.19 811.704,1063.57 813.404,1063.19C815.103,1062.8 816.802,1062.61 818.501,1062.61C823.882,1062.61 828.236,1063.92 831.563,1066.55C834.891,1069.19 836.554,1072.67 836.554,1077.01C836.554,1080.26 835.634,1082.93 833.793,1085.02C831.953,1087.11 829.545,1088.15 826.572,1088.15C824.448,1088.15 822.749,1087.65 821.475,1086.64C820.2,1085.64 818.961,1084.47 817.758,1083.16C816.554,1081.84 815.315,1080.68 814.041,1079.67C812.766,1078.67 811.067,1078.17 808.943,1078.17C805.97,1078.17 803.138,1080.26 800.448,1084.44C801.864,1087.07 802.855,1089.89 803.421,1092.91C803.988,1095.93 804.271,1099.45 804.271,1103.48C804.271,1109.36 803.421,1114.78 801.722,1119.74C800.023,1124.69 797.368,1129.07 793.757,1132.86C790.147,1136.65 785.509,1139.86 779.846,1142.5C774.182,1145.13 767.315,1146.91 759.244,1147.84C752.447,1148.61 747.739,1149.62 745.12,1150.86C742.5,1152.1 741.19,1153.95 741.19,1156.43C741.19,1160.15 744.376,1162.31 750.748,1162.93ZM760.943,1134.6C765.474,1134.6 769.014,1131.97 771.562,1126.7C774.111,1121.44 775.385,1114.09 775.385,1104.64C775.385,1095.04 774.111,1087.65 771.562,1082.46C769.014,1077.28 765.403,1074.68 760.73,1074.68C755.916,1074.68 752.093,1077.31 749.261,1082.58C746.429,1087.84 745.013,1095.04 745.013,1104.18C745.013,1113.47 746.465,1120.86 749.367,1126.36C752.27,1131.85 756.129,1134.6 760.943,1134.6Z"></path>
                                <path d="M945.299,1166.42C932.414,1182.36 916.343,1190.34 897.086,1190.34C888.307,1190.34 880.343,1188.83 873.192,1185.81C866.041,1182.79 859.918,1178.53 854.82,1173.04C849.723,1167.54 845.758,1161 842.926,1153.41C840.094,1145.83 838.678,1137.39 838.678,1128.1C838.678,1118.5 840.165,1109.71 843.139,1101.74C846.112,1093.76 850.324,1086.88 855.776,1081.07C861.227,1075.26 867.67,1070.73 875.104,1067.48C882.537,1064.23 890.714,1062.61 899.635,1062.61C914.644,1062.61 926.325,1067.02 934.68,1075.84C943.034,1084.67 947.211,1097.06 947.211,1113C947.211,1115.48 946.857,1116.99 946.149,1117.53C945.441,1118.07 943.458,1118.34 940.202,1118.34L871.811,1118.34C871.245,1119.74 870.962,1122.29 870.962,1126.01C870.962,1141.18 873.971,1153.18 879.989,1162C886.006,1170.83 894.183,1175.24 904.52,1175.24C910.467,1175.24 916.378,1173.77 922.255,1170.83C928.131,1167.89 933.83,1163.71 939.352,1158.29L945.299,1166.42ZM904.095,1105.34C909.759,1105.34 913.405,1104.99 915.033,1104.29C916.662,1103.6 917.476,1101.93 917.476,1099.3C917.476,1092.49 915.706,1086.91 912.166,1082.58C908.626,1078.24 904.166,1076.08 898.785,1076.08C892.697,1076.08 887.281,1078.82 882.537,1084.32C877.794,1089.82 874.714,1096.82 873.298,1105.34L904.095,1105.34Z"></path>
                                <path d="M1009.65,1149.69C1009.65,1156.2 1009.8,1161.31 1010.08,1165.02C1010.36,1168.74 1011.14,1171.57 1012.42,1173.5C1013.69,1175.43 1015.53,1176.71 1017.94,1177.33C1020.34,1177.95 1023.67,1178.42 1027.92,1178.73L1027.92,1188.02L960.804,1188.02L960.804,1178.73C965.052,1178.42 968.45,1177.95 970.999,1177.33C973.547,1176.71 975.459,1175.47 976.733,1173.62C978.008,1171.76 978.857,1169.09 979.282,1165.6C979.707,1162.12 979.919,1157.44 979.919,1151.55L979.919,1122.76C979.919,1113.93 979.813,1106.58 979.601,1100.69C979.388,1094.81 978.999,1090.78 978.432,1088.62C978.008,1086.6 977.477,1085.02 976.839,1083.86C976.202,1082.69 975.211,1081.77 973.866,1081.07C972.521,1080.37 970.786,1079.91 968.662,1079.67C966.538,1079.44 963.777,1079.33 960.379,1079.33L960.379,1071.43L1001.37,1062.61L1003.92,1082.81L1005.19,1082.81C1011.14,1075.53 1017.12,1070.35 1023.14,1067.25C1029.16,1064.15 1036.13,1062.61 1044.06,1062.61C1053.41,1062.61 1061.12,1064.39 1067.21,1067.95C1073.3,1071.51 1077.9,1076.62 1081.02,1083.28L1081.87,1083.28C1086.96,1076.77 1093.05,1071.7 1100.13,1068.06C1107.21,1064.42 1114.79,1062.61 1122.86,1062.61C1131.36,1062.61 1138.75,1063.77 1145.05,1066.09C1151.36,1068.41 1156.28,1071.74 1159.82,1076.08C1162.65,1079.64 1164.74,1084.28 1166.08,1090.01C1167.43,1095.74 1168.1,1103.71 1168.1,1113.93L1168.1,1149.69C1168.1,1156.04 1168.28,1161.08 1168.63,1164.79C1168.98,1168.51 1169.8,1171.37 1171.07,1173.38C1172.35,1175.4 1174.19,1176.71 1176.59,1177.33C1179,1177.95 1182.33,1178.42 1186.58,1178.73L1186.58,1188.02L1119.46,1188.02L1119.46,1178.73C1123.71,1178.57 1127.07,1178.14 1129.55,1177.45C1132.03,1176.75 1133.94,1175.43 1135.28,1173.5C1136.63,1171.57 1137.48,1168.89 1137.83,1165.49C1138.19,1162.08 1138.36,1157.44 1138.36,1151.55L1138.36,1121.13C1138.36,1113.08 1137.94,1106.27 1137.09,1100.69C1136.24,1095.12 1134.89,1090.63 1133.05,1087.22C1131.21,1083.82 1128.77,1081.38 1125.73,1079.91C1122.68,1078.44 1118.96,1077.7 1114.58,1077.7C1109.62,1077.7 1105.55,1079.02 1102.36,1081.65C1099.18,1084.28 1096.52,1087.69 1094.4,1091.87C1090.72,1099.14 1088.88,1108.2 1088.88,1119.04L1088.88,1149.69C1088.88,1156.04 1089.02,1161.08 1089.3,1164.79C1089.58,1168.51 1090.36,1171.37 1091.64,1173.38C1092.91,1175.4 1094.79,1176.71 1097.27,1177.33C1099.74,1177.95 1103.18,1178.42 1107.57,1178.73L1107.57,1188.02L1040.24,1188.02L1040.24,1178.73C1044.49,1178.42 1047.85,1177.95 1050.33,1177.33C1052.81,1176.71 1054.72,1175.47 1056.06,1173.62C1057.41,1171.76 1058.26,1169.09 1058.61,1165.6C1058.96,1162.12 1059.14,1157.44 1059.14,1151.55L1059.14,1121.13C1059.14,1113.08 1058.72,1106.27 1057.87,1100.69C1057.02,1095.12 1055.64,1090.63 1053.72,1087.22C1051.81,1083.82 1049.3,1081.38 1046.19,1079.91C1043.07,1078.44 1039.18,1077.7 1034.5,1077.7C1029.83,1077.7 1025.97,1078.94 1022.93,1081.42C1019.88,1083.89 1017.37,1087.22 1015.39,1091.4C1013.55,1095.12 1012.13,1099.38 1011.14,1104.18C1010.15,1108.98 1009.65,1113.93 1009.65,1119.04L1009.65,1149.69Z"></path>
                                <path d="M1304.45,1166.42C1291.57,1182.36 1275.5,1190.34 1256.24,1190.34C1247.46,1190.34 1239.5,1188.83 1232.35,1185.81C1225.2,1182.79 1219.07,1178.53 1213.98,1173.04C1208.88,1167.54 1204.91,1161 1202.08,1153.41C1199.25,1145.83 1197.83,1137.39 1197.83,1128.1C1197.83,1118.5 1199.32,1109.71 1202.29,1101.74C1205.27,1093.76 1209.48,1086.88 1214.93,1081.07C1220.38,1075.26 1226.83,1070.73 1234.26,1067.48C1241.69,1064.23 1249.87,1062.61 1258.79,1062.61C1273.8,1062.61 1285.48,1067.02 1293.84,1075.84C1302.19,1084.67 1306.37,1097.06 1306.37,1113C1306.37,1115.48 1306.01,1116.99 1305.3,1117.53C1304.6,1118.07 1302.61,1118.34 1299.36,1118.34L1230.97,1118.34C1230.4,1119.74 1230.12,1122.29 1230.12,1126.01C1230.12,1141.18 1233.13,1153.18 1239.14,1162C1245.16,1170.83 1253.34,1175.24 1263.67,1175.24C1269.62,1175.24 1275.53,1173.77 1281.41,1170.83C1287.29,1167.89 1292.99,1163.71 1298.51,1158.29L1304.45,1166.42ZM1263.25,1105.34C1268.91,1105.34 1272.56,1104.99 1274.19,1104.29C1275.82,1103.6 1276.63,1101.93 1276.63,1099.3C1276.63,1092.49 1274.86,1086.91 1271.32,1082.58C1267.78,1078.24 1263.32,1076.08 1257.94,1076.08C1251.85,1076.08 1246.44,1078.82 1241.69,1084.32C1236.95,1089.82 1233.87,1096.82 1232.45,1105.34L1263.25,1105.34Z"></path>
                                <path d="M1368.6,1149.93C1368.6,1156.12 1368.81,1161.08 1369.23,1164.79C1369.66,1168.51 1370.51,1171.37 1371.78,1173.38C1373.06,1175.4 1374.9,1176.75 1377.31,1177.45C1379.71,1178.14 1382.97,1178.57 1387.08,1178.73L1387.08,1188.02L1320.17,1188.02L1320.17,1178.73C1324.14,1178.57 1327.36,1178.07 1329.84,1177.22C1332.31,1176.36 1334.23,1174.97 1335.57,1173.04C1336.91,1171.1 1337.84,1168.39 1338.33,1164.91C1338.83,1161.42 1339.07,1156.97 1339.07,1151.55L1339.07,1122.99C1339.07,1114.01 1338.93,1106.62 1338.65,1100.81C1338.37,1095 1338.01,1091.02 1337.59,1088.85C1336.88,1084.98 1335.29,1082.42 1332.81,1081.18C1330.33,1079.95 1325.84,1079.33 1319.32,1079.33L1319.32,1071.43L1368.6,1062.61L1368.6,1149.93ZM1337.38,1013.37C1337.38,1008.26 1338.97,1003.97 1342.15,1000.48C1345.34,996.998 1349.2,995.256 1353.73,995.256C1358.4,995.256 1362.33,996.998 1365.52,1000.48C1368.7,1003.97 1370.3,1008.26 1370.3,1013.37C1370.3,1018.33 1368.7,1022.54 1365.52,1026.03C1362.33,1029.51 1358.4,1031.25 1353.73,1031.25C1349.2,1031.25 1345.34,1029.51 1342.15,1026.03C1338.97,1022.54 1337.38,1018.33 1337.38,1013.37Z"></path>
                                <path d="M1445.27,1150.16C1445.27,1156.51 1445.45,1161.5 1445.8,1165.14C1446.16,1168.78 1446.93,1171.57 1448.14,1173.5C1449.34,1175.43 1451.18,1176.71 1453.66,1177.33C1456.14,1177.95 1459.5,1178.42 1463.75,1178.73L1463.75,1188.02L1396.85,1188.02L1396.85,1178.73C1400.95,1178.42 1404.24,1177.95 1406.72,1177.33C1409.2,1176.71 1411.11,1175.47 1412.46,1173.62C1413.8,1171.76 1414.69,1169.13 1415.11,1165.72C1415.54,1162.31 1415.75,1157.67 1415.75,1151.79L1415.75,1122.76C1415.75,1113.62 1415.61,1106.23 1415.32,1100.58C1415.04,1094.93 1414.69,1091.09 1414.26,1089.08C1413.84,1087.07 1413.27,1085.4 1412.56,1084.09C1411.85,1082.77 1410.79,1081.77 1409.38,1081.07C1407.96,1080.37 1406.19,1079.91 1404.07,1079.67C1401.94,1079.44 1399.25,1079.33 1396,1079.33L1396,1071.43L1436.99,1062.61L1439.75,1083.04L1440.6,1083.04C1445.27,1076.54 1450.79,1071.51 1457.16,1067.95C1463.54,1064.39 1470.55,1062.61 1478.19,1062.61C1487.25,1062.61 1494.58,1063.96 1500.17,1066.67C1505.77,1069.38 1510.76,1073.91 1515.15,1080.26C1517.56,1083.82 1519.68,1088.42 1521.52,1094.07C1523.36,1099.73 1524.28,1107.51 1524.28,1117.41L1524.28,1150.16C1524.28,1156.51 1524.46,1161.5 1524.81,1165.14C1525.16,1168.78 1525.94,1171.57 1527.15,1173.5C1528.35,1175.43 1530.16,1176.71 1532.56,1177.33C1534.97,1177.95 1538.23,1178.42 1542.33,1178.73L1542.33,1188.02L1475.86,1188.02L1475.86,1178.73C1480.1,1178.57 1483.47,1178.14 1485.94,1177.45C1488.42,1176.75 1490.3,1175.47 1491.57,1173.62C1492.85,1171.76 1493.7,1169.09 1494.12,1165.6C1494.55,1162.12 1494.76,1157.51 1494.76,1151.79L1494.76,1120.2C1494.76,1112.31 1494.33,1105.65 1493.48,1100.23C1492.63,1094.81 1491.25,1090.44 1489.34,1087.11C1487.43,1083.78 1484.92,1081.38 1481.8,1079.91C1478.69,1078.44 1474.79,1077.7 1470.12,1077.7C1465.59,1077.7 1461.7,1079.1 1458.44,1081.88C1455.18,1084.67 1452.35,1088.54 1449.94,1093.49C1448.67,1096.28 1447.57,1099.88 1446.65,1104.29C1445.73,1108.7 1445.27,1113.31 1445.27,1118.11L1445.27,1150.16Z"></path>
                                <path d="M1597.56,1149.93C1597.56,1156.12 1597.77,1161.08 1598.19,1164.79C1598.62,1168.51 1599.47,1171.37 1600.74,1173.38C1602.02,1175.4 1603.86,1176.75 1606.26,1177.45C1608.67,1178.14 1611.93,1178.57 1616.03,1178.73L1616.03,1188.02L1549.13,1188.02L1549.13,1178.73C1553.1,1178.57 1556.32,1178.07 1558.79,1177.22C1561.27,1176.36 1563.18,1174.97 1564.53,1173.04C1565.87,1171.1 1566.79,1168.39 1567.29,1164.91C1567.79,1161.42 1568.03,1156.97 1568.03,1151.55L1568.03,1055.64C1568.03,1046.66 1567.89,1039.27 1567.61,1033.46C1567.33,1027.65 1566.97,1023.67 1566.55,1021.5C1565.84,1017.63 1564.25,1015.07 1561.77,1013.84C1559.29,1012.6 1554.79,1011.98 1548.28,1011.98L1548.28,1004.08L1597.56,995.256L1597.56,1149.93Z"></path>
                                <path d="M1735.19,1166.42C1722.3,1182.36 1706.23,1190.34 1686.97,1190.34C1678.19,1190.34 1670.23,1188.83 1663.08,1185.81C1655.93,1182.79 1649.8,1178.53 1644.71,1173.04C1639.61,1167.54 1635.64,1161 1632.81,1153.41C1629.98,1145.83 1628.57,1137.39 1628.57,1128.1C1628.57,1118.5 1630.05,1109.71 1633.03,1101.74C1636,1093.76 1640.21,1086.88 1645.66,1081.07C1651.11,1075.26 1657.56,1070.73 1664.99,1067.48C1672.42,1064.23 1680.6,1062.61 1689.52,1062.61C1704.53,1062.61 1716.21,1067.02 1724.57,1075.84C1732.92,1084.67 1737.1,1097.06 1737.1,1113C1737.1,1115.48 1736.74,1116.99 1736.04,1117.53C1735.33,1118.07 1733.35,1118.34 1730.09,1118.34L1661.7,1118.34C1661.13,1119.74 1660.85,1122.29 1660.85,1126.01C1660.85,1141.18 1663.86,1153.18 1669.88,1162C1675.89,1170.83 1684.07,1175.24 1694.41,1175.24C1700.35,1175.24 1706.27,1173.77 1712.14,1170.83C1718.02,1167.89 1723.72,1163.71 1729.24,1158.29L1735.19,1166.42ZM1693.98,1105.34C1699.65,1105.34 1703.29,1104.99 1704.92,1104.29C1706.55,1103.6 1707.36,1101.93 1707.36,1099.3C1707.36,1092.49 1705.59,1086.91 1702.05,1082.58C1698.51,1078.24 1694.05,1076.08 1688.67,1076.08C1682.58,1076.08 1677.17,1078.82 1672.42,1084.32C1667.68,1089.82 1664.6,1096.82 1663.18,1105.34L1693.98,1105.34Z"></path>
                                <path d="M1792.53,1137.15C1792.53,1142.88 1793.28,1148.19 1794.76,1153.06C1796.25,1157.94 1798.27,1162.16 1800.82,1165.72C1803.36,1169.28 1806.41,1172.07 1809.95,1174.08C1813.49,1176.09 1817.38,1177.1 1821.63,1177.1C1830.12,1177.1 1836.57,1172.84 1840.96,1164.33C1845.35,1155.81 1847.54,1143.27 1847.54,1126.7C1847.54,1110.6 1845.38,1098.33 1841.06,1089.89C1836.75,1081.46 1830.27,1077.24 1821.63,1077.24C1816.53,1077.24 1811.82,1078.75 1807.51,1081.77C1803.19,1084.79 1799.82,1089 1797.42,1094.42C1794.16,1101.85 1792.53,1111.22 1792.53,1122.52L1792.53,1137.15ZM1792.11,1080.95L1792.96,1080.95C1796.64,1075.07 1801.38,1070.54 1807.19,1067.37C1812.99,1064.19 1819.58,1062.61 1826.94,1062.61C1834.44,1062.61 1841.42,1064.27 1847.86,1067.6C1854.3,1070.93 1859.9,1075.46 1864.64,1081.18C1869.38,1086.91 1873.1,1093.65 1875.79,1101.39C1878.48,1109.13 1879.83,1117.41 1879.83,1126.24C1879.83,1135.53 1878.37,1144.08 1875.47,1151.9C1872.57,1159.72 1868.6,1166.49 1863.58,1172.22C1858.55,1177.95 1852.67,1182.44 1845.95,1185.69C1839.22,1188.94 1832.11,1190.57 1824.6,1190.57C1816.82,1190.57 1809.49,1188.9 1802.62,1185.58C1795.75,1182.25 1790.27,1177.87 1786.16,1172.45L1770.02,1188.02L1762.8,1188.02L1762.8,1049.83C1762.8,1035.28 1761.88,1025.29 1760.04,1019.87C1759.61,1018.79 1759.12,1017.86 1758.55,1017.09C1757.98,1016.31 1757.17,1015.65 1756.11,1015.11C1755.05,1014.57 1753.59,1014.11 1751.75,1013.72C1749.91,1013.33 1747.51,1012.91 1744.53,1012.44L1744.53,1004.55L1792.11,995.256L1792.11,1080.95Z"></path>
                                <path d="M1960.96,1121.83C1949.07,1127.71 1940.11,1133.17 1934.09,1138.2C1928.07,1143.23 1925.07,1148.46 1925.07,1153.88C1925.07,1158.37 1926.2,1161.93 1928.46,1164.56C1930.73,1167.19 1933.56,1168.51 1936.96,1168.51C1940.36,1168.51 1943.54,1167.85 1946.52,1166.53C1949.49,1165.22 1952.04,1163.48 1954.16,1161.31C1956.29,1159.14 1957.95,1156.55 1959.15,1153.53C1960.36,1150.51 1960.96,1147.3 1960.96,1143.89L1960.96,1121.83ZM1960.96,1109.52L1960.96,1099.76C1960.96,1090.78 1959.51,1084.24 1956.61,1080.14C1953.7,1076.04 1949.21,1073.99 1943.12,1073.99C1939.01,1073.99 1935.9,1075.18 1933.77,1077.59C1931.65,1079.99 1929.67,1083.97 1927.83,1089.55C1926.55,1093.42 1924.75,1096.43 1922.41,1098.6C1920.07,1100.77 1916.85,1101.85 1912.75,1101.85C1908.78,1101.85 1905.74,1100.54 1903.61,1097.91C1901.49,1095.27 1900.43,1091.56 1900.43,1086.76C1900.43,1079.33 1904.14,1073.44 1911.58,1069.11C1919.01,1064.77 1930.23,1062.61 1945.24,1062.61C1961.1,1062.61 1972.43,1065.74 1979.23,1072.01C1986.02,1078.28 1989.42,1088.77 1989.42,1103.48L1989.42,1154.34C1989.42,1167.5 1991.83,1174.08 1996.64,1174.08C1999.33,1174.08 2001.81,1173.07 2004.08,1171.06L2007.26,1177.8C2005.28,1181.67 2002.2,1184.73 1998.02,1186.97C1993.84,1189.21 1989.14,1190.34 1983.9,1190.34C1977.38,1190.34 1972.43,1188.17 1969.03,1183.84C1965.63,1179.5 1963.93,1173.38 1963.93,1165.49L1962.87,1165.49C1958.76,1173.54 1953.45,1179.65 1946.94,1183.84C1940.43,1188.02 1932.99,1190.11 1924.64,1190.11C1915.72,1190.11 1908.57,1187.36 1903.19,1181.86C1897.81,1176.36 1895.12,1169.2 1895.12,1160.38C1895.12,1153.57 1897.88,1147.18 1903.4,1141.22C1908.92,1135.26 1918.13,1129.41 1931.01,1123.68L1960.96,1109.52Z"></path>
                                <path d="M2064.61,1152.02C2064.61,1158.06 2064.85,1162.82 2065.35,1166.3C2065.85,1169.78 2066.87,1172.45 2068.43,1174.31C2069.99,1176.17 2072.25,1177.37 2075.23,1177.91C2078.2,1178.45 2082.16,1178.73 2087.12,1178.73L2087.12,1188.02L2016.18,1188.02L2016.18,1178.73C2020.43,1178.42 2023.83,1177.95 2026.38,1177.33C2028.92,1176.71 2030.84,1175.47 2032.11,1173.62C2033.38,1171.76 2034.2,1169.09 2034.55,1165.6C2034.91,1162.12 2035.08,1157.44 2035.08,1151.55L2035.08,1123.22C2035.08,1113.62 2034.87,1105.96 2034.45,1100.23C2034.02,1094.5 2033.1,1090.09 2031.69,1086.99C2030.27,1083.89 2028.25,1081.84 2025.63,1080.84C2023.01,1079.83 2019.58,1079.33 2015.33,1079.33L2015.33,1071.2L2057.81,1062.61L2061.21,1089.31L2062.06,1089.31C2065.88,1081.11 2070.91,1074.61 2077.14,1069.81C2083.37,1065.01 2089.95,1062.61 2096.89,1062.61C2102.27,1062.61 2106.66,1064.08 2110.06,1067.02C2113.46,1069.96 2115.16,1073.68 2115.16,1078.17C2115.16,1083.12 2113.85,1087.3 2111.23,1090.71C2108.61,1094.11 2105.03,1095.82 2100.5,1095.82C2098.38,1095.82 2096.47,1095.35 2094.77,1094.42C2093.07,1093.49 2091.55,1092.45 2090.2,1091.29C2088.85,1090.13 2087.51,1089.04 2086.16,1088.04C2084.82,1087.03 2083.44,1086.53 2082.02,1086.53C2079.33,1086.53 2076.78,1088.46 2074.38,1092.33C2071.97,1096.2 2069.99,1101.39 2068.43,1107.89C2067.3,1112.54 2066.38,1117.76 2065.67,1123.57C2064.96,1129.37 2064.61,1135.14 2064.61,1140.87L2064.61,1152.02Z"></path>
                                <path d="M2170.16,1150.16C2170.16,1156.51 2170.34,1161.5 2170.7,1165.14C2171.05,1168.78 2171.83,1171.57 2173.03,1173.5C2174.24,1175.43 2176.08,1176.71 2178.55,1177.33C2181.03,1177.95 2184.4,1178.42 2188.64,1178.73L2188.64,1188.02L2121.74,1188.02L2121.74,1178.73C2125.85,1178.42 2129.14,1177.95 2131.62,1177.33C2134.09,1176.71 2136.01,1175.47 2137.35,1173.62C2138.7,1171.76 2139.58,1169.13 2140.01,1165.72C2140.43,1162.31 2140.64,1157.67 2140.64,1151.79L2140.64,1122.76C2140.64,1113.62 2140.5,1106.23 2140.22,1100.58C2139.93,1094.93 2139.58,1091.09 2139.16,1089.08C2138.73,1087.07 2138.16,1085.4 2137.46,1084.09C2136.75,1082.77 2135.69,1081.77 2134.27,1081.07C2132.86,1080.37 2131.09,1079.91 2128.96,1079.67C2126.84,1079.44 2124.15,1079.33 2120.89,1079.33L2120.89,1071.43L2161.88,1062.61L2164.64,1083.04L2165.49,1083.04C2170.16,1076.54 2175.69,1071.51 2182.06,1067.95C2188.43,1064.39 2195.44,1062.61 2203.09,1062.61C2212.15,1062.61 2219.48,1063.96 2225.07,1066.67C2230.66,1069.38 2235.65,1073.91 2240.04,1080.26C2242.45,1083.82 2244.57,1088.42 2246.41,1094.07C2248.26,1099.73 2249.18,1107.51 2249.18,1117.41L2249.18,1150.16C2249.18,1156.51 2249.35,1161.5 2249.71,1165.14C2250.06,1168.78 2250.84,1171.57 2252.04,1173.5C2253.25,1175.43 2255.05,1176.71 2257.46,1177.33C2259.87,1177.95 2263.12,1178.42 2267.23,1178.73L2267.23,1188.02L2200.75,1188.02L2200.75,1178.73C2205,1178.57 2208.36,1178.14 2210.84,1177.45C2213.32,1176.75 2215.19,1175.47 2216.47,1173.62C2217.74,1171.76 2218.59,1169.09 2219.01,1165.6C2219.44,1162.12 2219.65,1157.51 2219.65,1151.79L2219.65,1120.2C2219.65,1112.31 2219.23,1105.65 2218.38,1100.23C2217.53,1094.81 2216.15,1090.44 2214.24,1087.11C2212.33,1083.78 2209.81,1081.38 2206.7,1079.91C2203.58,1078.44 2199.69,1077.7 2195.01,1077.7C2190.48,1077.7 2186.59,1079.1 2183.33,1081.88C2180.08,1084.67 2177.24,1088.54 2174.84,1093.49C2173.56,1096.28 2172.47,1099.88 2171.55,1104.29C2170.62,1108.7 2170.16,1113.31 2170.16,1118.11L2170.16,1150.16Z"></path>
                            </g>
                        </g>
                    </svg>
                    <p>
                        Im November 1985 wurde auf Initiative des damaligen Direktors der Volksschule Gemeinlebarn, Alois Graf, eine Ausstellung mit dem Titel <strong><q>Schaufenster in die Geschichte unseres Ortes</q></strong> im Schulgebäude veranstaltet. Die damals von der Bevölkerung zur Verfügung gestellten Inhalte (Dokumente, Fotos, Pläne, etc.) wurden nach der Veranstaltung zu einem großen Teil der Schule überlassen und begründeten damit den initialen Sammlungsbestand unseres Archivs.
                    </p>
                    <p>
                        Hiervon ausgehend arbeiten wir als Ortsarchiv seit 2012 an der Weiterführung des Archivs, das nun im Feuerwehrhaus in Gemeinlebarn angesiedelt ist.
                        Neben einer inhaltlichen Neustrukturierung nach ICA-Standards, erschließen wir seit geraumer Zeit auch neue Inhalte und digitalisieren unsere Archivbestände fortlaufend.
                    </p>
                    <p>
                        Mit Veranstaltungen vorort und digitalen Angeboten zu verschiedenen Themen und Inhalten, wollen wir unser Archiv auch für die breite Öffentlichkeit öffnen und einen Beitrag im Sinne der <q>Public History</q> leisten.
                    </p>

                    <p class="website-link">
                        <a href="https://www.ortsarchiv-gemeinlebarn.org" target="_blank">Website des Ortsarchivs</a>
                    </p>

                    <slot></slot>
                </oag-content>
            </Host>
        );
    }

}
