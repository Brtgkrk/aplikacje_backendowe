package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @RequestMapping("/template")

    public String template()
    {
        return "index";
    }

    @RequestMapping("/hello{nazwa}")
    @ResponseBody
    public String index2(
            @PathVariable String nazwa,
            @RequestParam Integer age,
            @RequestParam Boolean test
    )
    {
        return "Hello " + nazwa + "! age: " + age + " test: " + test;
    }
}