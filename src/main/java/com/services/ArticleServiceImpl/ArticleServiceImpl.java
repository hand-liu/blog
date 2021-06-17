package com.services.ArticleServiceImpl;

import com.entity.Article;
import com.mapper.ArticleMapper;
import com.services.IArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ArticleServiceImpl implements IArticleService {

    @Autowired
    private ArticleMapper articleMapper;


    @Override
    public List<Article> list(Map<String, Object> params) {
        return articleMapper.list(params);
    }

}
