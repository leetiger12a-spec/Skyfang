/* 온라인 협동 추가 중계(TURN) 서버 설정 — 선택 사항
   기본으로 PeerJS 무료 중계 서버(포트 3478)를 씁니다. 회사·LTE처럼 막힌 통신망에서도
   잘 연결되게 하려면 443 포트 TURN을 추가하세요. 예: Metered Open Relay 무료 가입 후
   대시보드에서 받은 값을 아래 형식으로 넣습니다. 이 파일은 공개되므로 무료·사용량 제한 계정만 쓰세요.

window.SKY_TURN=[
  {urls:['turn:<도메인>:80','turn:<도메인>:443','turns:<도메인>:443?transport=tcp'],username:'<사용자명>',credential:'<비밀번호>'}
];
*/
window.SKY_TURN=window.SKY_TURN||[];
