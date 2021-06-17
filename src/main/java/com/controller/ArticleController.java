package com.controller;

import com.entity.Article;
import com.services.IArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/article")
public class ArticleController {

    @Autowired
    private IArticleService articleService;

    @RequestMapping("/list")
    public List<Article> list(@RequestBody Map<String, Object> params){
        String type = (String) params.get("type");
        if(!StringUtils.isEmpty(type)){
            String[] types = type.split(",");
            if(types.length > 1){
                params.remove("type");
                params.put("types", Arrays.asList(types));
            }
        }
        List<Article> list = articleService.list(params);
        return list;
    }
}
