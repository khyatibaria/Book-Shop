const Badge = (props) => {
  const { badgeCount, element } = props;
  return (
    <figure class="badge icon-badge">
      {/* <img class="img-responsive icon-badge" src="../assets/message.svg" /> */}
      <div className="icon-badge">{element}</div>
      <div class="badge-count badge-top badge-right" id="icon">
        {badgeCount}
      </div>
    </figure>
  );
};
export default Badge;
