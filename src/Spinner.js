import React from "react";


const Spinner = (props) => {
    return(
        <div class="ui">
  <div class="ui active dimmer">
    <div class="ui text loader">{props.message || 'Loading...' }</div>
  </div>
  <p></p>
</div>

    )
}

Spinner.defaultProps = {
   message:'Hello Folks'
}

export default Spinner