<template>
<nav v-if="show">
		<ul>
            <div class="closeButton">
            <a v-on:click="hide"><i class="fas fa-times"  id="closeIcon"></i></a>
			</div>
			<li class="logo"><img alt="" src="https://i.postimg.cc/WzkCM20g/logo1.png"></li>
			<li>
				<a href="#"><i class="fa fa-home"></i>home</a>
			</li>
			<li>
				<a href="#"><i class="fa fa-book"></i>about</a>
			</li>
			<li>
				<a href="#"><i class="fa fa-users"></i>Team</a>
			</li>
			<li>
				<a href="#"><i class="fa fa-picture-o"></i>portfolio</a>
			</li>
			<li>
				<a href="#"><i class="fa fa-phone"></i>contact</a>
			</li>
		</ul>
	</nav>
   <a href="#menu-toggle" class="btn btn-default" v-on:click="display" id="menu-toggle">Toggle Menu</a>

</template>
<script>
export default {
  name: "Sidebar",
  components: {},
  data() {
    return {
      show:false,
    };
  },
  methods:{
      display(){
    // this.show=!this.show, //show and hide
    this.show=true //show
    },
    hide(){
        this.show=false;
        }
}};
</script>


<style>
@import "./Sidebar.styles.scss";
</style>