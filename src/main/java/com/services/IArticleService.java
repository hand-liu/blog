package com.services;

import com.entity.Article;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface IArticleService {
    List<Article> list(Map<String, Object> params);
}
