(this.webpackJsonpMERNStack=this.webpackJsonpMERNStack||[]).push([[0],{162:function(n,t,e){(function(n){var t=e(85),r=e(339),o=e(12),c=(e(343).mongoose,t());c.set("port",Object({NODE_ENV:"production",PUBLIC_URL:"/Task-manager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||3e3),c.use(r("dev")),c.use(t.json()),c.use("/api/tasks",e(344)),c.use(t.static(o.join(n,"../public"))),c.listen(c.get("port"),(function(){console.log("Server on port ".concat(c.get("port")))}))}).call(this,"/")},190:function(n,t){},191:function(n,t){},195:function(n,t){},197:function(n,t){},231:function(n,t){},234:function(n,t){function e(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id=234},236:function(n,t){},238:function(n,t){},245:function(n,t){},247:function(n,t){},275:function(n,t){},277:function(n,t){},278:function(n,t){},283:function(n,t){},285:function(n,t){},304:function(n,t){},316:function(n,t){},319:function(n,t){},343:function(n,t,e){var r=e(161);r.connect("mongodb+srv://dan:Dnsanianlau22@taskmancluster.pgq4v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then((function(n){return console.log("DB is connected")})).catch((function(n){return console.log(n)})),n.exports=r},344:function(n,t,e){"use strict";e.r(t),function(n){var t=e(8),r=e.n(t),o=e(29),c=e(85).Router(),i=e(347);c.get("/",function(){var n=Object(o.a)(r.a.mark((function n(t,e){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.find();case 2:o=n.sent,console.log(o),e.json(o);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()),c.get("/:id",function(){var n=Object(o.a)(r.a.mark((function n(t,e){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.findById(t.params.id);case 2:o=n.sent,e.json(o);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()),c.post("/",function(){var n=Object(o.a)(r.a.mark((function n(t,e){var o,c,a,s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.body,c=o.title,a=o.description,s=new i({title:c,description:a}),n.next=4,s.save();case 4:e.json({status:"Task Saved"});case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()),c.put("/:id",function(){var n=Object(o.a)(r.a.mark((function n(t,e){var o,c,a,s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.body,c=o.title,a=o.description,s={title:c,description:a},n.next=4,i.findByIdAndUpdate(t.params.id,s);case 4:e.json({status:"Task Updated"});case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()),c.delete("/:id",function(){var n=Object(o.a)(r.a.mark((function n(t,e){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.findByIdAndRemove(t.params.id);case 2:e.json({status:"Task Deleted"});case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()),n.exports=c}.call(this,e(345)(n))},347:function(n,t,e){var r=e(161),o=new(0,r.Schema)({title:{type:String,required:!0},description:{type:String,require:!0}});n.exports=r.model("Task",o)}},[[162,1,2]]]);
//# sourceMappingURL=main.de39df63.chunk.js.map