import React from 'react'
import {Container, CustomModal ,Header ,Sub ,Main,StyledInput,InputSpan ,SubHead ,Head, WholeContainer ,RightContaniner, TextSpan ,List ,IconSpan ,Icon , MainContainer,TodoSpan ,Stroke } from './styles'
import plus from '../assets/plus.svg'
import trash from '../assets/trash.svg'
import tick from '../assets/tick.svg'
import task from '../assets/task.svg'
import check from '../assets/check.svg'
import clock from '../assets/clock.gif'
import background from '../assets/wave.gif'
import done from '../assets/done.gif'
import deleted from '../assets/delete.gif'

const Todo = () =>{
    const [inputText , setinput] = React.useState("")
    const [todo , setTodo] = React.useState([])
    const [ inputLength,setInputLength] = React.useState("")
    const [donemodal , setDoneModal] = React.useState(false)
    const [deleteModal , setDeleteModal] = React.useState(false)

   const doneHandler = () =>{
    setDoneModal(true);
    setTimeout(() => setDoneModal(false) , 2500);
   }

   
   const deletedHandler = () =>{
    setDeleteModal(true)
    setTimeout(() => setDeleteModal(false),1100)

   }

    const addTaskHandler = (e)=>{
        if(inputLength){
        setTodo([
            ...todo , {text : inputText , completed : false , id : Math.random()*10}
        ])
        setinput("")
    }}

    React.useEffect(()=>{
        getLocal()
    },[])

    React.useEffect(()=>{
        saveLocal()
    },[todo])

    const inputHandler = (e)=>{
        if(e.target.value.length > 0)
        {
            setInputLength(true)
            setinput(e.target.value) 
        }
        
           
           
    }

    const deleteHandler = (e) =>{
            setTodo(todo.filter((el) => el.id !== e.id));
    };

    const completeHandler = (e) =>{
        setTodo(todo.map((item) =>{
            if(item.id === e.id){
                return {
                    ...item , completed : !item.completed
                }
            }

            else return item
        }))
    }

const saveLocal = () =>{
    localStorage.setItem("todos" ,JSON.stringify(todo));
}
const getLocal = () =>{
    if(localStorage.getItem("todos") === null)

    {
        localStorage.setItem("todos" , JSON.stringify([]))
    }
    else{
        let todoLocal = JSON.parse(localStorage.getItem("todos"))
        setTodo(todoLocal)
    }
}


    return(
        <WholeContainer style={{height: "100vh",
            overflow: "hidden", 
        }}>
           <Head style={{backgroundImage: `url(${background})` }}>
<Header>Shashank’s TODO List</Header>
</Head>
<MainContainer>

<Container style={{paddingTop : "30px"}}><SubHead style={{color : "#ffffff" , textAlign : 'center'}}> Pending</SubHead> <List >

    {todo.map((todo) => {
    if(!todo.completed){
        return (
    <li key={todo.id}  style={{cursor : "pointer"}}><TodoSpan>
        <TextSpan>{todo.text}</TextSpan>
        <IconSpan>
            <Icon src={tick} alt="" onClick={ ()=>{
                 doneHandler()
        completeHandler(todo)
            }}  /> <Icon src={trash} alt="" onClick={()=>{
                deletedHandler()
                deleteHandler(todo)}} />  
            </IconSpan>
            </TodoSpan>
             </li>
     )}
}
    )}

 
    </List>
    </Container>

    <Main>

<Sub> Add A Task <img style={{marginLeft : "25px"}} src={task} alt=""/></Sub>
<InputSpan >
        
    <StyledInput value={inputText} placeholder="Enter a Task"  onChange={inputHandler} onFocus={() =>setInputLength("")} onKeyDown={(e)=>{
        setInputLength("")
        if(e.key === "Enter"){
            addTaskHandler()
        }
        }}></StyledInput>
<img src={plus} style={{marginLeft : "10px" , cursor : "pointer"}} alt="" onClick={addTaskHandler}/>
    </InputSpan>
    <span style={{display : "flex" , justifyContent : "space-between", alignItems : "center", width : "35vw"}}>
        
    <img src={check} alt=""/>
    <img src={clock} alt="" width="100px" height="100px" style={{marginTop: "26px"}} />
    </span>
</Main>



<RightContaniner style={{paddingTop : "30px"}}>
<SubHead style={{color : "#ffffff" , textAlign : 'center'}}> Completed</SubHead>
<List>

{todo.map((item , index)=>{
    if(item.completed)
    {
        return <li key={index} style={{cursor : "pointer"}}> 
        
        <TodoSpan>
        <Stroke>{item.text}</Stroke>
        <IconSpan>
            <Icon src={trash} alt="" onClick={()=>{
                deletedHandler()
                deleteHandler(item)}} />  
            </IconSpan>
            </TodoSpan>
        </li>
    }
   
})}

</List>

</RightContaniner>
</MainContainer>

<CustomModal
footer={null}
closable={false}
visible={donemodal}
width={250}
>
    <div>

<img src={done} alt="" height="300px" width="300px"/>
    </div>
</CustomModal>

<CustomModal
footer={null}
closable={false}
visible={deleteModal}
width={250}
>
    <div>

<img src={deleted} alt="" height="300px" width="300px"/>
    </div>
</CustomModal>

        </WholeContainer>


    )
}
export default Todo