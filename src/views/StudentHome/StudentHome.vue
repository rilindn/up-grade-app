<template>
  <Wrapper>
   <TopBox>
       <div>
       <p>Welcome back Agnesa!</p>
       <span>Lorem ipsum lorem lorem ipsum sdhjs lorem ipsum sum lorem lorem ipsum sdhjs lorem ipsum</span>
       </div>
     <img src="@/assets/studentProfile.svg" alt=""  width="300"/>
   </TopBox>
   <MiddleBox>
          <RightBox>
       <p>dd</p>
   </RightBox>
   <LeftBox>
      <h3>List Of   Teachers</h3>
     <div>
     <img src="@/assets/profile.jpeg" alt=""  width="300"/>
     <div>
     <span>Alia Mendalys</span>
     <p>English Teacher</p>
     </div>
     <button>View Profile</button>
    </div>
     <div>
     <img src="@/assets/profile.jpeg" alt=""  width="300"/>
     <div>
     <span>Alia Mendalys</span>
     <p>English Teacher</p>
     </div>
     <button style="backgroundColor:#D9F2CE;color:#78D34E">View Profile</button>
    </div>
     <div>
     <img src="@/assets/profile.jpeg" alt=""  width="300"/>
     <div>
     <span>Alia Mendalys</span>
     <p>English Teacher</p>
     </div>
     <button style="backgroundColor:#C3EDFF;color:#00A1E9">View Profile</button>
    </div>
     <div>
     <img src="@/assets/profilee.jpeg" alt=""  width="300"/>
     <div>
     <span>Alia Mendalys</span>
     <p>English Teacher</p>
     </div>
     <button style="backgroundColor:#FFDFF6;color:#9B0A72">View Profile</button>
    </div>
     <div>
     <img src="@/assets/profile.jpeg" alt=""  width="300"/>
     <div>
     <span>Alia Mendalys</span>
     <p>English Teacher</p>
     </div>
     <button>View Profile</button>
    </div>
   </LeftBox>
 </MiddleBox>
       
  </Wrapper>
</template>
<script>
import { Wrapper,TopBox,LeftBox,MiddleBox,RightBox,Teachers} from "./StudentHome.styles";
export default {
  components: {
    Wrapper,
    TopBox,
    MiddleBox,
    LeftBox,
    RightBox,
    Teachers
  },
};
</script>
