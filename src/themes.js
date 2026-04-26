export const themes = {
  cosmic: {
    id:'cosmic', name:'Cosmic', emoji:'🌌', dark:true,
    bg:'#06060f', bgCard:'#0c0c20', bgSection:'#090915', bgNav:'rgba(6,6,15,0.88)',
    border:'rgba(139,92,246,0.18)', borderHover:'rgba(139,92,246,0.55)',
    text:'#9090b8', textMuted:'#55556a', textHeading:'#f0f0ff',
    accent:'#8b5cf6', accent2:'#ec4899', rgb:'139,92,246',
    grad:'linear-gradient(135deg,#8b5cf6,#ec4899)',
    gradBg:'radial-gradient(ellipse 90% 60% at 50% -10%,rgba(139,92,246,0.22),transparent)',
    shadow:'0 8px 40px rgba(139,92,246,0.2)', glow:'0 0 60px rgba(139,92,246,0.38)',
  },
  neon: {
    id:'neon', name:'Neon', emoji:'⚡', dark:true,
    bg:'#010a04', bgCard:'#041209', bgSection:'#020905', bgNav:'rgba(1,10,4,0.92)',
    border:'rgba(0,255,136,0.18)', borderHover:'rgba(0,255,136,0.55)',
    text:'#5aab7a', textMuted:'#2a5a3a', textHeading:'#ccffdd',
    accent:'#00ff88', accent2:'#00ccff', rgb:'0,255,136',
    grad:'linear-gradient(135deg,#00ff88,#00ccff)',
    gradBg:'radial-gradient(ellipse 90% 60% at 50% -10%,rgba(0,255,136,0.18),transparent)',
    shadow:'0 8px 40px rgba(0,255,136,0.14)', glow:'0 0 60px rgba(0,255,136,0.32)',
  },
  sunset: {
    id:'sunset', name:'Sunset', emoji:'🌅', dark:false,
    bg:'#fffaf5', bgCard:'#ffffff', bgSection:'#fef5ea', bgNav:'rgba(255,250,245,0.94)',
    border:'rgba(249,115,22,0.18)', borderHover:'rgba(249,115,22,0.55)',
    text:'#7a5a3a', textMuted:'#b08a60', textHeading:'#180a00',
    accent:'#f97316', accent2:'#e11d48', rgb:'249,115,22',
    grad:'linear-gradient(135deg,#f97316,#e11d48)',
    gradBg:'radial-gradient(ellipse 90% 60% at 50% -10%,rgba(249,115,22,0.14),transparent)',
    shadow:'0 8px 40px rgba(249,115,22,0.14)', glow:'0 0 60px rgba(249,115,22,0.28)',
  },
  ocean: {
    id:'ocean', name:'Ocean', emoji:'🌊', dark:true,
    bg:'#020b1a', bgCard:'#071828', bgSection:'#04101f', bgNav:'rgba(2,11,26,0.92)',
    border:'rgba(56,189,248,0.18)', borderHover:'rgba(56,189,248,0.55)',
    text:'#60a8cc', textMuted:'#305a74', textHeading:'#d8f0ff',
    accent:'#38bdf8', accent2:'#818cf8', rgb:'56,189,248',
    grad:'linear-gradient(135deg,#38bdf8,#818cf8)',
    gradBg:'radial-gradient(ellipse 90% 60% at 50% -10%,rgba(56,189,248,0.18),transparent)',
    shadow:'0 8px 40px rgba(56,189,248,0.14)', glow:'0 0 60px rgba(56,189,248,0.3)',
  },
}
export const themeList = Object.values(themes)
export default themes
